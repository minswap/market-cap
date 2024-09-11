import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const STRIKE =
  "f13ac4d66b3ee19a6aa0f2a22298737bd907cc95121662fc971b5275535452494b45";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 25_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, STRIKE, [
    "addr1wxfsprv3e2ar80tf2rkex08673llh6rewhgfpzmeeqgnekqv3n2ps", // team vesting
    "addr1qx8xgm3zrytup3mdgzxf93d6hc4x6dxywmzhnste6kzhe4lvvwe5f7xtt25s5fyftlm468rnjznztvgn9p0gvvr72p5qhfgyug", // DAO
  ]);

  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
