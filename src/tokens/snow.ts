import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SNOW = "8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a534e4f57";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000n;
  const treasury = await getAmountInAddresses(blockFrost, SNOW, [
    "addr1q8jvdvjewjvmtkl4juup0wekz75520l5d4ltap48gwhqkfq0m4qjp5thfp4zf2s0z586f9aq54ct3e8r9gzw0edulveq3vn8tu", // SNOW treasury
    "addr1vxfa8dwzflct4re7qn2ls7t46w6rc479rafnwzqx4z2asuq6cg00t", // MuesliSwap Staking Rewards distribution
  ]);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
