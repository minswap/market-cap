import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 1_000_000_000;
  const circulating: number = await axios(
    "https://universe.pxlz.org/circulating"
  ).then((res) => res.data);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
