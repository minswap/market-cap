import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 3_840_000_000;
  const circulating = await axios(
    "https://raw.githubusercontent.com/Cornucopias/circulating-supply/main/cs"
  ).then((res) => res.data.toString());
  return {
    circulating,
    total: total.toString(),
  };
};

export default fetcher;
