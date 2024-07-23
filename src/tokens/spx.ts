import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

type Response = {
  circulating: string;
  total: string;
};

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const resp = await axios(
    "https://map.smart-places.io/api/token/circulating"
  ).then((res) => res.data as Response);
  return {
    circulating: resp.circulating,
    total: resp.total,
  };
};

export default fetcher;
