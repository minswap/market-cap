import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const LQ = "da8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 21_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, LQ, [
    "stake1uxqky4shfezhz9e6mjucmyxhd8sh9557afqg0lhep6yfrfsmvq4zd",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
