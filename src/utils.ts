import { BlockFrostAPI } from "@blockfrost/blockfrost-js";
import axios, { AxiosInstance } from "axios";

export type FetcherOptions = {
  /**
   * Fetch timeout in milliseconds. Default to 20s
   */
  timeout?: number;
};

export const defaultFetcherOptions: FetcherOptions = {
  timeout: 20_000,
};

export type SupplyFetcherResponse = {
  circulating: string;
  total: string;
}

export type SupplyFetcher = (options?: FetcherOptions) => Promise<SupplyFetcherResponse>;

export function getBlockFrostInstance(options: FetcherOptions): BlockFrostAPI {
  return new BlockFrostAPI({
    projectId: process.env["BLOCKFROST_PROJECT_ID"] ?? "",
    isTestnet: false,
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
  const amounts = await Promise.all(
    addresses.map(async (addr): Promise<bigint> => {
      const resp = await blockFrost.addresses(addr);
      const amount = resp.amount.find(({ unit }) => unit === token)?.quantity;
      return BigInt(amount ?? "0");
    })
  );
  return amounts.reduce((sum, x) => sum + x, 0n);
}
