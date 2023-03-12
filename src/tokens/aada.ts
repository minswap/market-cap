import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const AADA = "8fef2d34078659493ce161a6c7fba4b56afefa8535296a5743f6958741414441";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 29_500_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, AADA, [
    "stake1u98ak0va7tgd23rl62tphdare6z602e0vx5m0fw4gdr65kq875eec",
    "stake1uyt8x8wwvn5ze8aw6eqs35w2znyh4xnn9xsu3jxjk503nxcmdkjuz",
    "stake1u9hqmm7neuayxpm9962kk09x27yu5kmcx6h9f98tc4r2mzsyaeh40",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
