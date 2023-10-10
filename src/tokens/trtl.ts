import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TRTL = "52162581184a457fad70470161179c5766f00237d4b67e0f1df1b4e65452544c";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 76_715_880_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SNEK, [
    "stake1u8vvynj8wlj8ajje5qdrl7g2nla7579ltwz5v7hwr7dt2jc88zglw", // $trtlcoinada
    "addr1q9vxrskmzygzlgmans4rep35m4wutvzu89t202eag9gnnshgwq0hgcvjn0uxzjnuztqrsqke9ms7d3n55797cqg6w8ssecay", // $trtlcoinvault
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SNEK, [
    "addr1x8e0d4lvg4xtjyxghvfyc06jcdx9mxps2gjffng2m8q4e68j7mt7c32vhygv3wcjfsl49s6vtkvrq53yjnxs4kwptn5qnmjfck", //$burntrtl
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
