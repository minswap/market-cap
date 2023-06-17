import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 100000000;
  return {
    total: total.toString(),
  };
};

export default fetcher;
