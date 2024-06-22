import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SHARL = "590f6d119b214cdcf7ef7751f8b7f1de615ff8f6de097a5ce62b257b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = Number(999_000_000_000);
  return {
    circulating: total.toString(),
    total: total.toString(),
  };
};

export default fetcher;
