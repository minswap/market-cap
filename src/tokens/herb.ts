import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const HERB = "bb4cfbe0f6be60b80f90f815e8353b93431de4df785d75350b9d214a48455242";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 420_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, HERB, [
    "stake1uxzjdrglfs22pgtfjlza7fcavqurgptt0tlmzft373sygdq2np33a", // burn
    "stake1uxmx9lcvc7305u8npfcc570s5n9rwleyql37wqa7pr4t8vcwehs7p", // treasury
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
