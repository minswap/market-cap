import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TRTL = "52162581184a457fad70470161179c5766f00237d4b67e0f1df1b4e65452544c";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 356_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, TRTL, [
    "stake1u858q8m5vxffh7rpff7p9spcqtvjac0xce620zlvqyd8rcgxfw9lj", // $TRTL
    "stake1u908d0tv3re46g58vnwndvjewd7s6mccs7k2gecs7f0n7cq5g89gp", // Panic
  ]);

  const treasury = Number(treasuryRaw);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
