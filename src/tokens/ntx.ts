import { defaultFetcherOptions, SupplyFetcher } from "../types";
<<<<<<< HEAD
import {
  getAxiosInstance,
} from "../utils";
=======
import { getAxiosInstance } from "../utils";
>>>>>>> d9e0e13f51538fd05e5ff70205d3b74f9d109897

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const circulating = await axios(
    "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=ntx&q=circulatingsupply"
  ).then((res) => res.data.toString());
  const total = await axios(
    "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=ntx&q=totalsupply"
  ).then((res) => res.data.toString());
  return {
    circulating,
    total,
  };
};

export default fetcher;
