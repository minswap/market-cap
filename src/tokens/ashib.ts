import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  const total = 109000000000;
  return {
    total: total.toString(),
  };
};

export default fetcher;
