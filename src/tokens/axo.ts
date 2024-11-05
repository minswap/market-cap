import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const circulating = await axios("https://api.axo.trade/axo/circulating").then((res) => res.data.toString());
  const total = await axios("https://api.axo.trade/axo/total").then((res) => res.data.toString());
  return {
    circulating,
    total,
  };
};

export default fetcher;
