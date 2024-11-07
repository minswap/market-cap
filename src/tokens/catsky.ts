import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CATSKY = "9b426921a21f54600711da0be1a12b026703a9bd8eb9848d08c9d921434154534b59";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 999_999_999_997;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CATSKY, [
    "stake1uxln0cv8ne7zskyhsmuna5rx5xw9undrvx4nqxvrmcvuweskz2mje", // treasury $catbank.catsky
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
