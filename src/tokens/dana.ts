import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 125_000_000;
  const circulating: number = await axios(
    "https://api.coingecko.com/api/v3/coins/ardana"
  ).then((res) => res.data.market_data.circulating_supply);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
