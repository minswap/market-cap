import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ASHIB =
  "afc910d7a306d20c12903979d4935ae4307241d03245743548e767834153484942";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000_000;

  const burnRaw = await getAmountInAddresses(blockFrost, ASHIB, [
    "addr1w8qvvu0m5jpkgxn3hwfd829hc5kfp0cuq83tsvgk44752dsea0svn", // burn wallet
  ]);

  const burn = Number(burnRaw) / 1e6;
  return {
    total: (total - burn).toString(),
  };
};

export default fetcher;
