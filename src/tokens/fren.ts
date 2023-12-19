import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const fren =
  "fc11a9ef431f81b837736be5f53e4da29b9469c983d07f321262ce614652454e";

const frenFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 420_069_000_000n;
  const treasury = await getAmountInAddresses(blockFrost, fren, [
    "", // FREN treasury
    "", //Burn
  ]);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default frenFetcher;
