import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 97_739_924;

  const circulating: number = await axios
    .get("https://api.ergoplatform.com/info/supply")
    .then((res) => res.data);

  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
