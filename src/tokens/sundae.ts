import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SUNDAE =
  "9a9693a9a37912a5097918f97918d15240c92ab729a0b7c4aa144d7753554e444145";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2e9; // 2 billion
  const treasuryRaw = await getAmountInAddresses(blockFrost, SUNDAE, [
    "addr1w9pgj46r4wh80ujlrdf5h6sxuuvfac2wurfnsn4xgqw584sfa966l",
    "addr1w9742z4fewans7ry6cjp95pc4ecv7y54cx298lp5qfw7s9gv8ukrj",
    "addr1wyv9f6gz32y5jm5hw2j53qnjn5t92nuwmxhj0mrqgmy6slqstuvzw",
    "addr1wy67s0c6edxc2djms0le256cn48edc8gdfcgxkjjztyw0psad4yet"
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
