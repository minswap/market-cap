import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BET =
  "d542ad1dc269ae601125e8259cb8427c6b37c1d3569d10441df0291f4149";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000;
  const vestingRaw = await getAmountInAddresses(blockFrost, BET, [
    "stake1uxxsyr4385z8syr3qs8k8vcpfqgxf8ddskknfyavm0apjcqvht2vw" // Treasury
  ]);

  const vesting = Number(vestingRaw);
  return {
    circulating: (total - vesting).toString(),
    total: total.toString(),
  };
};

export default fetcher;
