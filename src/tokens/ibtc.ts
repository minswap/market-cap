import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const iBTC = "f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069425443";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = await fetcher.getSupplyFromAssetMetadata(iBTC);
  const circulating = Number(total) / 1e6;
  return {
    circulating: circulating.toString(),
    total: circulating.toString(),
  };
};

export default fetcher;
