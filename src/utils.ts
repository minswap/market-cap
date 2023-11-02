import { BlockFrostAPI } from "@blockfrost/blockfrost-js";
import axios, { AxiosInstance } from "axios";

import { FetcherOptions } from "./types";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getBlockFrostInstance(options: FetcherOptions): BlockFrostAPI {
  return new BlockFrostAPI({
    projectId: process.env["BLOCKFROST_PROJECT_ID"] ?? "",
    requestTimeout: options.timeout,
  });
}

export function getAxiosInstance(options: FetcherOptions): AxiosInstance {
  return axios.create({
    timeout: options.timeout,
  });
}

export async function getAmountInAddresses(
  blockFrost: BlockFrostAPI,
  token: string,
  addresses: string[]
): Promise<bigint> {
  let totalAmount = 0n;

  for (let i = 0; i < addresses.length; i += 10) {
    const batch = addresses.slice(i, i + 10);

    const amounts = await Promise.all(
      batch.map(async (addr): Promise<bigint> => {
        const value = addr.startsWith("stake")
          ? await blockFrost.accountsAddressesAssetsAll(addr)
          : await blockFrost.addresses(addr).then((resp) => resp.amount);

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
