import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const circulating = await axios(
    "https://app-backend.meld.com/api/market/meld/supply"
  ).then((res) => res.data.toString());
  const total = 4e9; // 4 billion
  return {
    circulating,
    total: total.toString(),
  };
};

export default fetcher;
