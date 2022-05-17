import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const circulating = await axios(
    "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=agix&q=circulatingsupply"
  ).then((res) => res.data.toString());
  const total = await axios(
    "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=agix&q=totalsupply"
  ).then((res) => res.data.toString());
  return {
    circulating,
    total,
  };
};

export default fetcher;
