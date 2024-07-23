import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DEGA = "25c5de5f5b286073c593edfd77b48abc7a48e5a4f3d4cd9d428ff93544454741";
const TREASURY_ADDRESSES = ["<INSERT TREASURY HERE>"];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 33.80325678;
  const treasury = Number(
    await getAmountInAddresses(blockFrost, DEGA, TREASURY_ADDRESSES)
  );

  return {
    circulating: ((total * 1e8 - treasury) / 1e8).toString(),
    total: total.toString(),
  };
};

export default fetcher;
