import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getMaestroClient } from "../utils";

const xVYFI =
  "b316f8f668aca7359ecc6073475c0c8106239bf87e05a3a1bd5697647856594649";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const assetInfo = await maestro.assets
    .assetInfo(xVYFI)
    .then((res) => res.data.data);
  const circulating = Number(assetInfo?.total_supply) / 1e6;
  return {
    circulating: circulating.toString(),
    total: circulating.toString(),
  };
};

export default fetcher;
