import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MOAI = "482fb00dc32186a4c587dca2df3c7cf2bc455332ab581d51967306e14d4f4149";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = Number(60_000_000);
  const treasuryRaw = await getAmountInAddresses(blockFrost, MOAI, [
    "stake1uyszp885h7z8fry5thjdcj5msk59ajsannca7x3g3d2ycvgqfq6t9", // Treasury
    "stake1u9afgy0npvt9sal5vzlm5t6n5uyvch8t9mmznhtkn9wjacgfdtldf", // Mutant Stake Rewards Distribution
    "stake1ux07wmwzwv06kl02ct3m4lly569lsvjvp6za9756r8hdsmslyw5mv", // burn wallet
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
