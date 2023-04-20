import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CMC = "a56b1bfd69d317076c5c864d647851e2961594b21ec056f3c8491485";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  return {
    circulating: total.toString(),
    total: total.toString(),
  };
};

export default fetcher;
