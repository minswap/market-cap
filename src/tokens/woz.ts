import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 45_000_000_000;
  return {
    total: total.toString(),
  };
};

export default fetcher;
