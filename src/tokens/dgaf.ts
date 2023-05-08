import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DGAF =
  "64c3ebd40ed377989aa3069a2936e07c6ce82df46688c473d921520664676166";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000_000;
  const treasury = await getAmountInAddresses(blockFrost, DGAF, [
    "addr1qxv38h82n624zjf6yjsucf96wq097lm2yydsff94m0qxfandahsn5yeex2a7j8vaqs5u0qgtfz75sr89ar7gll5kp0dqstfp2v"
  ]);

  return {
    circulating: (total - Number(treasury) / 1e6).toString(),
    total: total.toString(),
  };
};

export default fetcher;
