import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DADDY = "6e6098846537ca48ff18eac70b7f5040c69ba2c5570521b6eb00fdf5";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000_000;
  
  return {
    circulating: total.toString(),
    total: total.toString(),
  };
};

export default fetcher;
