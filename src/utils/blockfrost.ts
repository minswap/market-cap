import { BlockFrostAPI } from "@blockfrost/blockfrost-js";
import { AxiosInstance } from "axios";

import { FetcherOptions } from "../types";
import { BlockchainIndexer, getAxiosInstance, sleep } from ".";

export function getBlockFrostInstance(options: FetcherOptions): BlockFrostAPI {
  return new BlockFrostAPI({
    projectId: process.env["BLOCKFROST_PROJECT_ID"] ?? "",
    requestTimeout: options.timeout,
  });
}

export class BlockfrostIndexer implements BlockchainIndexer {
  axios: AxiosInstance;
  api: BlockFrostAPI;

  constructor(options: FetcherOptions) {
    this.api = getBlockFrostInstance(options);
    this.axios = getAxiosInstance(options);
  }

  assetAddresses = async <T extends { address: string }>(
    token: string
  ): Promise<T[]> => {
    const addresses = await this.api.assetsAddresses(token);
    return addresses as unknown as T[];
  };

  getSupplyFromAssetMetadata = async (token: string): Promise<number> => {
    const total = await this.api.assetsById(token).then((res) => res.quantity);
    return Number(total);
  };

  getSupplyFromPolicyMetadata = async (policy: string): Promise<number> => {
    const quantity = await this.api
      .assetsPolicyById(policy)
      .then((resp) => resp[0].quantity);
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
            ? await this.api.accountsAddressesAssetsAll(addr)
            : await this.api.addresses(addr).then((resp) => resp.amount);
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
}
