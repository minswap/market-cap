import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DJED =
  "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a65644d6963726f555344";
const DJEDNFT =
  "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a6564537461626c65436f696e4e4654";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e12;
  const addresses = await blockFrost.assetsAddresses(DJEDNFT);
  const treasuryRaw = await getAmountInAddresses(blockFrost, DJED, [
    addresses[0]["address"],
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: (total - treasury).toString(),
  };
};

export default fetcher;
