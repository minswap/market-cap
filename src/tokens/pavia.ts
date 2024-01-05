import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const PAVIA =
  "884892bcdc360bcef87d6b3f806e7f9cd5ac30d999d49970e7a903ae5041564941";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 1e9;
  const blockFrost = getBlockFrostInstance(options);
  const treasury = await getAmountInAddresses(blockFrost, PAVIA, [
    "stake1uxy8jh76wavelv6nc3mjnka0v5uveu45znq3aykx90lam4cdxdumd",
  ]);
  return {
    circulating: (total - Number(treasury)).toString(),
    total: total.toString(),
  };
};

export default fetcher;
