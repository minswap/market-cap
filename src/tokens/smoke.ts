import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SMOKE = "dd00d877798443a2de57e5bc667784168616aa8244b558743e448784534d4f4b45";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 76_715_880_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SMOKE, [
    "stake1uyzckf6tcr4d3mqu9y9z8xuqmjygsnj0pr5440fls49su8c4xygss", // $smoketeam
    "stake1uxqs97h0whyzrfjesqn93gzv6k2e6chgw74ze3e20djtshgcq8xk4", // $smokemarketing
  ]);

  const treasury = Number(treasuryRaw);
  
  return {
    circulating: (total - treasury).toString(),
    total: (total).toString(),
  };
};

export default fetcher;
