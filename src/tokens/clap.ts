import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CLAP = "db30c7905f598ed0154de14f970de0f61f0cb3943ed82c891968480a434c4150";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9; // 1 billion
  const treasuryRaw = await getAmountInAddresses(blockFrost, CLAP, [
    "addr1qxkcc74fpfvdenelc7m4zxtezrgvnhmd7z78jlkgr4gy9x9cjxt7rq9rfwqqh3wv24adfv2hex0ttwu3zh7e276xmcesgw34jc",
  ]);
  const treasury = Number(treasuryRaw) / 1e3;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
