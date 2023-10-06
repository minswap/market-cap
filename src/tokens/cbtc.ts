import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getBlockFrostInstance } from "../utils";

const CBTC = "4190b2941d9be04acc69c39739bd5acc66d60ccab480d8e20bc87e3763425443";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = await blockFrost.assetsById(CBTC).then((res) => res.quantity);
  const totalWithDecimals = Number(total) / 1e8;
  return {
    circulating: totalWithDecimals.toString(),
    total: totalWithDecimals.toString(),
  };
};

export default fetcher;
