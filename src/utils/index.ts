import { BlockFrostAPI } from "@blockfrost/blockfrost-js";
import { MaestroClient } from "@maestro-org/typescript-sdk";
import axios, { AxiosInstance } from "axios";

import { defaultFetcherOptions, FetcherOptions } from "../types";
import { MaestroIndexer } from "./maestro";

export * from "./blockfrost";
export * from "./maestro";

export function getAxiosInstance(options: FetcherOptions): AxiosInstance {
  return axios.create({
    timeout: options.timeout,
  });
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface BlockchainIndexer {
  axios: AxiosInstance;
  api: BlockFrostAPI | MaestroClient;
  assetAddresses: <T extends { address: string }>(
    token: string
  ) => Promise<T[]>;
  getSupplyFromAssetMetadata(token: string): Promise<number>;
  getSupplyFromPolicyMetadata(policy: string): Promise<number>;
  getAmountInAddresses(token: string, addresses: string[]): Promise<bigint>;
}

export const defaultFetcher = new MaestroIndexer(defaultFetcherOptions);
