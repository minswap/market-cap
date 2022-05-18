import { SupplyFetcher } from "../types";

const _WMT =
  "1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e";

const fetcher: SupplyFetcher = async () => {
  const total = 2_000_000_000n; // 2 billion
  return {
    total: total.toString(),
  };
};

export default fetcher;
