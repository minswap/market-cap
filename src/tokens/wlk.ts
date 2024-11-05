import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const WLK = "017af5d958fffdf65f3e5b8b3ff5abefd210a03464a9fc48ea0f4a390014df10574c4b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 55e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, WLK, [
    "addr1vxgzxk84zzk0zj787wrzf3m9nu5edexukv66p0z4s3e02lqf3692x", // treasury (initial)
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
