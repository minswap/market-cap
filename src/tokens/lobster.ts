import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const LOBSTER =
  "8654e8b350e298c80d2451beb5ed80fc9eee9f38ce6b039fb8706bc34c4f4253544552";

const TREASURY_ADDRESSES = [
  "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // yield farming bot
  "addr1w94tcvd04rvkpa7c6057fq6sfxqcpu7q539gdskvx8jz0zgld4mju", // STAKING
  "addr1q9cxpyew4ejyamjk5ycg95lhkswpsdkta36sjdx4p8e6hg2a0cwj8v3hjkj5era0dtpjtw5zema9lsfz80wu7kt3sxusyv58nf", // Treasury vault
];

const BURN_ADDRESSES = [
  "addr1w93rz3ae8p3elzn0sqfu37hyzw0up98r2kgjjdmdq9wshmck40yr8", // $cardanoburn
  "addr1qx5lyl2rww7h84xhup9ge22h42vnwurcfucrk3w3x7nyh9lfaquqs0f48akca9kvukqsp3cax4whwmj792dlelq7lymsk2mn3f", // $lobster.burn
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e15; // 1T
  const treasury = Number(
    await getAmountInAddresses(blockFrost, LOBSTER, TREASURY_ADDRESSES)
  );
  const burnt = Number(
    await getAmountInAddresses(blockFrost, LOBSTER, BURN_ADDRESSES)
  );
  return {
    circulating: (total - burnt - treasury).toString(),
    total: (total - burnt).toString(),
  };
};

export default fetcher;
