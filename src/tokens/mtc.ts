import { defaultFetcherOptions, SupplyFetcher } from "../types";

const MTC = "f6ac48c64aa7af16434d9f84e014d11fba38525b436acc338ff20b0d4d7463";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 1_000_000;
  return {
    total: total.toString(),
  };
};

export default fetcher;
