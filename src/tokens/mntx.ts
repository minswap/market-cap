import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getBlockFrostInstance } from "../utils";

const MNTX = "77cab21b1a0eb05886cb9fe8e3d297456e53c1d948dba42219a1b3804d796e746820546f6b656e2058";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const assetInfo = await blockFrost.assetsById(MNTX);
  const circulating = Number(assetInfo?.quantity) / 1e6;
  return {
    circulating: circulating.toString(),
    total: circulating.toString(),
  };
};

export default fetcher;
