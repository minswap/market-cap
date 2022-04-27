import minFetcher from "./tokens/min";

export type SupplyFetcher = () => Promise<{
  circulating: bigint;
  total: bigint;
}>;

export const supplyFetchers: Record<string, SupplyFetcher> = {
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e": minFetcher,
};
