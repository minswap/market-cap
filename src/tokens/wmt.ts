import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 2e9; // 2 billion
  const circulating: number = await axios(
    "https://api.coingecko.com/api/v3/coins/world-mobile-token"
  ).then((res) => res.data.market_data.circulating_supply);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
