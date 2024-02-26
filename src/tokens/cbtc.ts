import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getBlockFrostInstance } from "../utils";

const CBTC = "4190b2941d9be04acc69c39739bd5acc66d60ccab480d8e20bc87e3763425443";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 80_000_000;
  const circulating = 80_000_000;
  return {
    total: total.toString(),
    circulating: circulating.toString(),
  };
};

export default fetcher;
