import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SMOKE = "dd00d877798443a2de57e5bc667784168616aa8244b558743e448784534d4f4b45";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 6_900_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SMOKE, [
    "stake1uyzckf6tcr4d3mqu9y9z8xuqmjygsnj0pr5440fls49su8c4xygss", // $smoketeam
    "stake1uxqs97h0whyzrfjesqn93gzv6k2e6chgw74ze3e20djtshgcq8xk4", // $smokemarketing
  ]);

  const treasury = Number(treasuryRaw);
  
  const burnRaw = await getAmountInAddresses(blockFrost, SMOKE, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
