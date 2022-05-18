import { SupplyFetcher } from "../types";

const _DANA =
  "c88bbd1848db5ea665b1fffbefba86e8dcd723b5085348e8a8d2260f44414e41";

/**
 * Reference: https://docs.ardana.org/dana-token/tokenomics
 */
const fetcher: SupplyFetcher = async () => {
  const total = 125_000_000;
  return {
    total: total.toString(),
  };
};

export default fetcher;
