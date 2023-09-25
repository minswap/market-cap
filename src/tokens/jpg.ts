import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 1_000_000_000;
  const circulating = 200_000_000;

  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
