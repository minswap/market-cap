import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SLOP = "ea02c99c0668891d6b7cdc49e075cbddf9cd5b89404e5a8a8e5d7016534c4f5020436f696e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SLOP, [
    "stake1u8ugkt7a7p8wl4635lsjamepma9dvtyhye378g6z8vuvrqqujky50", // $slop
    "stake1u9l00ughh8q2v7a6gd20fl3z2nq2ft0g4c2rr4pvucjwmvs2a9vfs", // $hogsweeper
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SLOP, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn address
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
