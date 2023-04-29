import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const LQ = "da8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 21_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, LQ, [
    "stake17xuctqah3vtn232230mgnh8j0g0c9xe9j59a5jv54v2m6lghq7wjg", // user dist
    "stake17y92lfz032ahf6xly5fp3l8k28xzpzullx46ffg8vmt7xpquzjyrp", // team
    "stake179h0rfqsl5qhl7mh9wrazeel0wkzxck8zaq6et4k3jtz96c374qun", // treasury
    "stake1782eemwxrrfmzga0yq5eewhu5cqe6p0n0wa8xwzhwkwhl4q327q0r" // staking
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
