import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 200_000_000;
  const circulating: number = await axios
    .get("https://token.empowa.io/emp/supply")
    .then((res) => res.data.circulating_amount / 1e6);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
