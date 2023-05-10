import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CBLP = "ee0633e757fdd1423220f43688c74678abde1cead7ce265ba8a24fcd43424c50";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CBLP, [
    "stake1u8v5d6e9jjk8qnhde904p7jnv2ln868ux77df0r6j725gqch3tqms",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
