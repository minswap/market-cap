import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CNETA =
  "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000n;
  const treasury = await getAmountInAddresses(blockFrost, CNETA, [
    "addr1qx08dp9krl0tvv88e5mhqphevtcuujefmx8k0p3nu08yjakgzmuckmpqk4ge4g66qs6shuu2r7uu7ygq3vkjxxl6rpsqt0dwyt",
    "addr1q9wjw9vl3g45f63kvsr487m45xq25f88p2jjg37gelcllw5r65qxyr79pkpgm225d3z3n53fwnqcfhdmv9xcemgns98q4x08su",
  ]);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
