import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const xVYFI =
  "b316f8f668aca7359ecc6073475c0c8106239bf87e05a3a1bd5697647856594649";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = await fetcher.getSupplyFromAssetMetadata(xVYFI);
  const circulating = Number(total) / 1e6;
  return {
    circulating: circulating.toString(),
    total: circulating.toString(),
  };
};

export default fetcher;
