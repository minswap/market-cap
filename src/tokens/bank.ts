import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BANK = "2b28c81dbba6d67e4b5a997c6be1212cba9d60d33f82444ab8b1f21842414e4b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2.5e12;
  const treasuryRaw = await getAmountInAddresses(blockFrost, BANK, [
    "stake1uxq7mehxxywwzf0cczf7tq4surcphjdd53ngw5ev6qxf7hstnt9qf", // $bankercoinada
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
