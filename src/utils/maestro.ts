import {
  Asset,
  Configuration,
  MaestroClient,
} from "@maestro-org/typescript-sdk";
import { AxiosInstance } from "axios";

import { FetcherOptions } from "../types";
import { BlockchainIndexer, getAxiosInstance } from ".";

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

export class MaestroIndexer implements BlockchainIndexer {
  axios: AxiosInstance;
  api: MaestroClient;
  constructor(options: FetcherOptions) {
    this.api = getMaestroClient(options);
    this.axios = getAxiosInstance(options);
  }

  assetAddresses = async <T extends { address: string }>(
    token: string
  ): Promise<T[]> => {
    const res = await this.api.assets.assetAddresses(token);
    const addresses = res.data;
    return addresses as unknown as T[];
  };

  getSupplyFromAssetMetadata = async (token: string): Promise<number> => {
    const total = await this.api.assets
      .assetInfo(token)
      .then((res) => res.data.total_supply);
    return Number(total);
  };

  getSupplyFromPolicyMetadata = async (policy: string): Promise<number> => {
    const quantity = await this.api.assets
      .policyInfo(policy)
      .then((res) => res.data[0].total_supply);
    return Number(quantity);
  };

  getAmountInAddresses = async (
    token: string,
    addresses: string[]
  ): Promise<bigint> => {
    let totalAmount = 0n;
    for (let i = 0; i < addresses.length; i += 10) {
      const batch = addresses.slice(i, i + 10);
      const amounts = await Promise.all(
        batch.map(async (addr): Promise<bigint> => {
          const value = addr.startsWith("stake")
            ? await this.getAssetsByAccount(addr)
            : await this.getAssetsByAddress(addr);
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
  };

  private getAssetsByAccount = async (
    account: string
  ): Promise<{ unit: string; quantity: string }[]> => {
    const res = await this.api.accounts.accountAssets(account);
    return res.data.map((asset: Asset) => ({
      unit: asset.unit,
      quantity: asset.amount,
    }));
  };

  private getAssetsByAddress = async (
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
    const res = await this.api.addresses.utxosByAddress(addr);
    const assets = mergeAssets(res.data.map((utxo) => utxo.assets));
    return assets;
  };
}
