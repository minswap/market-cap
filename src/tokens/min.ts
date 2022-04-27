import { SupplyFetcher } from "..";

const fetcher: SupplyFetcher = async () => {
  return {
    circulating: 100_000_000_000_000n,
    total: 5_000_000_000_000_000n, // 5M
  };
};

export default fetcher;
