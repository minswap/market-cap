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
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;