import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const O = "2852268cf6e2db42e20f2fd3125f541e5d6c5a3d70b4dda17c2daa82";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 25e6;
  const treasuryRaw = await getAmountInAddresses(blockFrost, O, [
    "stake178j4fcxw7pwgxw92yu28c2zqmjxnumumj52hxr9jtr6qwngf2ve5n", // O Vesting Multisig
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
