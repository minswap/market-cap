import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const GIRLFREN = "20efaf13727eea5813e57530f1f9bb60fa8a986056b48c4b89d59b414769726c4672656e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 69_420_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, GIRLFREN, [
    "stake1uyz9dgwqjdtqa36nn7mn4t6ptsu66dnd3c9uwv9luhkzlcgsa3v5h", // Treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, GIRLFREN, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn address
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
