import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const HOSKY =
  "a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e15;
  const treasuryRaw = await getAmountInAddresses(blockFrost, HOSKY, [
    "stake1uxjskqrl3l0q0vz402hsgq5vu6ft0ne4949pqjewzx5j4gge6zh2x", // charles
    "stake1ux6rtgcn4defph3q00068vxzp9dpv084vulvsfkgcdzerssff44v8", // tbd
    "stake1uxl3jymaqw4lrw28xrkag7ugphk5l4eptfw6es9r87mx0lc5rcar0", // rugpool
    "stake1uyp8xczrtp5hrhv0juxuke2fsm8e6kr9xhk7j4ydk3jh7wc7eyxmm", // meme
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
