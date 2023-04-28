import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ASHIB =
  "";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  // source: https://docs.anetabtc.io/docs/user-guides/tokenomics/
  const total = 109_000_000_000n;
  const totalOnCardano = 109_000_000_000n;
  const treasury = await getAmountInAddresses(blockFrost, ASHIB, [
    "stake1uyuf3kjdy3akpm9gpyn98gyzhwc3ghpv95a5wh0tu9c0ydq6f062h",
  ]);
  return {
    circulating: (totalOnCardano - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
