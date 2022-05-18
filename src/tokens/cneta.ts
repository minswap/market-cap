import { SupplyFetcher } from "../types";

const _CNETA =
  "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441";

const fetcher: SupplyFetcher = async () => {
  const total = 1_000_000_000n;
  return {
    total: total.toString(),
  };
};

export default fetcher;
