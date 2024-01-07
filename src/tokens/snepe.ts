import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SNEPE =
  "b3bd74dd43f83815519e387bdffd1cb9be411df8f2774f48e0fd3669534e455045";

const snepeFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 420_000_000_069n;
  const treasury = await getAmountInAddresses(blockFrost, SNEPE, [
    "stake1uxhrhn6n0kszpkrvcn32hrqqx3jmna9n37w9n335u3x54sc5ats0c", // SNEPE treasury
  ]);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default snepeFetcher;
