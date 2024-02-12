import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getMaestroClient } from "../utils";

const CBTC = "4190b2941d9be04acc69c39739bd5acc66d60ccab480d8e20bc87e3763425443";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const total = await maestro.assets
    .assetInfo(CBTC)
    .then((res) => res.data.data.total_supply);
  const totalWithDecimals = Number(total) / 1e8;
  return {
    circulating: totalWithDecimals.toString(),
    total: totalWithDecimals.toString(),
  };
};

export default fetcher;
