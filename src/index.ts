import { BlockFrostAPI } from "@blockfrost/blockfrost-js";

import agixFetcher from "./tokens/agix";
import minFetcher from "./tokens/min";
import ntxFetcher from "./tokens/ntx";

export const blockFrost = new BlockFrostAPI({
  projectId: process.env["BLOCKFROST_PROJECT_ID"] ?? "",
  isTestnet: false,
});

export type SupplyFetcher = () => Promise<{
  circulating: string;
  total: string;
}>;

export const supplyFetchers: Record<string, SupplyFetcher> = {
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e": minFetcher,
  f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc53541474958: agixFetcher,
  edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458: ntxFetcher,
};
