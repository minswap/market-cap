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
    "https://app-backend.meld.com/api/market/meld/supply"
  ).then((res) => res.data.toString());
  const total = 4e9; // 4 billion
  return {
    circulating,
    total: total.toString(),
  };
};

export default fetcher;
