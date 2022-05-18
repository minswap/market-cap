import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 2e9;
  return {
    total: total.toString(),
  };
};

export default fetcher;
