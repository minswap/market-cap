import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BAG = "548c390391253aff00af9c95ae310f00803fd28035a6ed6f17c1e5e2424147";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9;

  const treasuryRaw = await getAmountInAddresses(blockFrost, BAG, [
    "stake1uxwvvuluasxf456sjuqcdfnlv3gecykp6ajf5ds4r09xkzgvwml26",
  ]);
  const treasury = Number(treasuryRaw);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
