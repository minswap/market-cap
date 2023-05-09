import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const VYFI = "804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 450_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, VYFI, [
    "addr1qx6jq2ns6g9t4y8zyf2ahmhjzw8k6h3a7fy5tkqwgnwgh09z80nptm8at52jqjauttsswp6d7h9rq807z80mqhge5aqqctjalg",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
