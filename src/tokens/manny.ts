import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MANNY =
  "338c17dffaaefdb97ace91100724836178c3f9dd994a4798a66f546d4d414e4e59";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  //
  const total = 10_000_000n;
  const totalOnCardano = 10_000_000n;
  const treasury = await getAmountInAddresses(blockFrost, MANNY, [
    "stake1uxmvymdlwu7rp7r3gclva7m9tgzy60xp3tkqtj2kh7d35nqumsfd2",
  ]);
  return {
    circulating: (totalOnCardano - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
