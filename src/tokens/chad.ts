import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHAD = "97075bf380e65f3c63fb733267adbb7d42eec574428a754d2abca55b436861726c6573207468652043686164";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000n;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CHAD, [
    "stake1uy0sgxfm8pzrkru97rg8pteu4j05c6dgwuwzemhg6k8te3g6h5due", // treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, CHAD, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn wallet
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
