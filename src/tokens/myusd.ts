import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getBlockFrostInstance } from "../utils";

const MyUSD = "92776616f1f32c65a173392e4410a3d8c39dcf6ef768c73af164779c4d79555344";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const assetInfo = await blockFrost.assetsById(MyUSD);
  const circulating = Number(assetInfo?.quantity) / 1e6;
  return {
    circulating: circulating.toString(),
    total: circulating.toString(),
  };
};

export default fetcher;
