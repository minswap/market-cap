import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 1e15;
  return {
    total: total.toString(),
  };
};

export default fetcher;
