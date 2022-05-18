import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  // source: https://www.cornucopias.io/
  const total = 3_840_000_000;
  return {
    total: total.toString(),
  };
};

export default fetcher;
