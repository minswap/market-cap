import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BOX = "f9a491442678bb2f90a3be676d1f888ce87330003ab7151f9efb3b68424f58";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, BOX, [
    "stake1uytg7kp24lqu4rnq9eyyc7ja2xzwshgrtrtmddr7zzlguqgzjqyyc",
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
