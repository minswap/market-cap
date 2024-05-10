import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const assetId =
  "7c4389a89ae25d18c77c2347ee8df20b4a6278d34e6c550296eb710e4d7248616e6b6579";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 121_719_970_109;

  const treasuryRaw = await getAmountInAddresses(blockFrost, assetId, [
    "addr1q9wpgjuvkq0vjz0j9gnmtsm78kywk89h00zmwdz0wd5u0dn68j687fzlz60n6y7gc72sszwlsr5kh6rllewj4ctxwvjsmvjfsx", // $mr.hankey
  ]);

  const treasury = Number(treasuryRaw);

  const burnRaw = await getAmountInAddresses(blockFrost, assetId, [
    "addr1w93rz3ae8p3elzn0sqfu37hyzw0up98r2kgjjdmdq9wshmck40yr8", // hosky burn
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // snek burn
  ]);

  const burn = Number(burnRaw);

  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
