import {
  defaultFetcherOptions,
  getAxiosInstance,
  SupplyFetcher,
  SupplyFetcherResponse,
} from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions): Promise<SupplyFetcherResponse> => {
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
