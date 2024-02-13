import {
  Asset,
  Configuration,
  MaestroClient,
} from "@maestro-org/typescript-sdk";
import axios, { AxiosInstance } from "axios";

import { FetcherOptions } from "./types";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getMaestroClient(options: FetcherOptions): MaestroClient {
  return new MaestroClient(
    new Configuration({
      apiKey: process.env["MAESTRO_API_KEY"] ?? "",
      network: process.env["NETWORK"] === "Preprod" ? "Preprod" : "Mainnet",
      baseOptions: {
        timeout: options.timeout,
      },
    })
  );
}

export function getAxiosInstance(options: FetcherOptions): AxiosInstance {
  return axios.create({
    timeout: options.timeout,
  });
}

export async function getAmountInAddresses(
  maestro: MaestroClient,
  token: string,
  addresses: string[]
): Promise<bigint> {
  const getAssetsByAccount = async (
    account: string
  ): Promise<{ unit: string; quantity: string }[]> => {
    const res = await maestro.accounts.accountAssets(account);
    return res.data.map((asset: Asset) => ({
      unit: asset.unit,
      quantity: asset.amount,
    }));
  };

  const getAssetsByAddress = async (
    addr: string
  ): Promise<{ unit: string; quantity: string }[]> => {
    const mergeAssets = (
      nestedAssets: Asset[][]
    ): { unit: string; quantity: string }[] => {
      const assetMap: Record<string, number> = {};
      const assets: { unit: string; quantity: string }[] = [];
      nestedAssets.forEach((assetArray) => {
        assetArray.forEach((asset) => {
          if (assetMap[asset.unit]) {
            assetMap[asset.unit] += Number(asset.amount);
          } else {
            assetMap[asset.unit] = Number(asset.amount);
          }
        });
      });
      for (const [unit, amount] of Object.entries(assetMap)) {
        assets.push({ unit, quantity: amount.toString() });
      }
      return assets;
    };
    const res = await maestro.addresses.utxosByAddress(addr);
    const assets = mergeAssets(res.data.map((utxo) => utxo.assets));
    return assets;
  };

  let totalAmount = 0n;

  for (let i = 0; i < addresses.length; i += 10) {
    const batch = addresses.slice(i, i + 10);

    const amounts = await Promise.all(
      batch.map(async (addr): Promise<bigint> => {
        const value = addr.startsWith("stake")
          ? await getAssetsByAccount(addr)
          : await getAssetsByAddress(addr);

        const amount = value
          .filter(({ unit }) => unit === token)
          .reduce((sum, x) => sum + BigInt(x.quantity), 0n);

        return amount;
      })
    );

    const batchTotal = amounts.reduce((sum, x) => sum + x, 0n);
    totalAmount += batchTotal;

    await sleep(1010);
  }

  return totalAmount;
}
