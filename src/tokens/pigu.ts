import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 1_000_000_000; // 1B
  return {
    circulating: total.toString(),
    total: total.toString(),
  };
};

export default fetcher;
