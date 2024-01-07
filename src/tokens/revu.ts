import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 280_125_000;
  const circulating: number = await axios(
    "https://production.revuto.com/api/v1/wallet/circulating_supply"
  ).then((res) => res.data);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
