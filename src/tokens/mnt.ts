import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const [totalSupplyResponse, circulatingResponse] = await Promise.all([
    axios.get("https://www.mynth.ai/api/total-supply"),
    axios.get("https://www.mynth.ai/api/current-supply"),
  ]);
  const totalSupply = Number(totalSupplyResponse.data) / 1e6;
  const circulating = Number(circulatingResponse.data) / 1e6;

  return {
    total: totalSupply.toString(),
    circulating: circulating.toString(),
  };
};

export default fetcher;
