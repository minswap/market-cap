import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FLDT = "577f0b1342f8f8f4aed3388b80a8535812950c7a892495c0ecdf0f1e0014df10464c4454";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FLDT, [
    "addr1w9sl503298lcpaqxtny68ex0cvxm42r2zzg2f8q9z2ggk9gw90cus",
    "addr1w9y5n85ltkjtwe53w5ngchsr9k3lvxnqhh3hvgmhy94e9ashq6g7s",
    "addr1wys3y9grqekln0f762mksc7daw9t53l5pappcvzz7w4zzlcuj8003",
    "addr1w8tc2gyudj9xnp4rfs5mefcnv3l4czqmvyd2es9yazy74hczqczwu",
    "addr1w96g27xgq67hsr8y4uha962jz7740ewqavwxftzycs4lpqgtynjww",
    "addr1w9jcqztr0988uurdsaz63ln47e08qq6yndu40umtz22glrs32sezm",
    "addr1wxw27ym03fwrvlcztx76p7t9spu4n0zmqg35jesjwnakuesr8q9wx",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
