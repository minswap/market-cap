import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DGAF = "64c3ebd40ed377989aa3069a2936e07c6ce82df46688c473d921520664676166";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, DGAF, [
    "stake1u9k7mcf6zvun9wlfrkwsg2w8sy95302gpnj73ly0l6tqhks997y0t", // dgaf treasury + vault allocation
  ]);
  const treasury = Number(treasuryRaw);
  const burnedRaw = await getAmountInAddresses(blockFrost, DGAF, [
    "addr1w88w37rdprvqrjn77vuj3mzral6dh6cex0m7smc9p2uqvlct6vp8a", // dgaf unredeemable addr
  ]);
  const burned = Number(burnedRaw);
  return {
    circulating: (total - treasury - burned).toString(),
    total: (total - burned).toString(),
  };
};

export default fetcher;
