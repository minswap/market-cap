import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 1669428532;

  return {
    circulating: total.toString(),
    total: total.toString(),
  };
};

export default fetcher;
