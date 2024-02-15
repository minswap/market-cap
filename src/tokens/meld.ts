import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const circulating = await fetcher
    .axios("https://app-backend.meld.com/api/market/meld/supply")
    .then((res) => res.data.toString());
  const total = 4e9; // 4 billion
  return {
    circulating,
    total: total.toString(),
  };
};

export default fetcher;
