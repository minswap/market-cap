import axios from "axios";

import { SupplyFetcher } from "..";

const fetcher: SupplyFetcher = async () => {
  const circulating = await axios(
    "https://app-backend.meld.com/api/market/meld/supply"
  ).then((res) => res.data);
  const total = 4e9; // 4 billion
  return {
    circulating,
    total: total.toString(),
  };
};

export default fetcher;
