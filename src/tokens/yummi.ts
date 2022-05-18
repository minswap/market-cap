import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
  // source: https://yummi-universe.gitbook.io/project-yummi/economics/tokenomics
  const total = 10_000_000_000;
  return {
    total: total.toString(),
  };
};

export default fetcher;
