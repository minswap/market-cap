import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 999_000_000_000;
  return {
    circulating: total.toString(),
    total: total.toString(),
  };
};

export default fetcher;
