import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getBlockFrostInstance } from "../utils";

const iUSD = "f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069555344";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const assetInfo = await blockFrost.assetsById(iUSD);
  const circulating = Number(assetInfo?.quantity) / 1e6;
  return {
    circulating: circulating.toString(),
    total: circulating.toString(),
  };
};

export default fetcher;
