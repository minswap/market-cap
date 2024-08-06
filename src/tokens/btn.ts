import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getBlockFrostInstance } from "../utils";

const BTN = "016be5325fd988fea98ad422fcfd53e5352cacfced5c106a932a35a442544e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 25e6;
  const assetInfo = await blockFrost.assetsById(BTN);
  const circulating = Number(assetInfo?.quantity) / 1e6;
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
