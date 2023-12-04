import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 1600000000;

  return {
    circulating: total.toString(),
    total: total.toString(),
  };
};

export default fetcher;
