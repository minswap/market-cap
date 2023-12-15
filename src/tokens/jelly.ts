import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const JELLY =
  "5c1c91a65bedac56f245b8184b5820ced3d2f1540e521dc1060fa6834a454c4c59";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 39_000_000;
  const vestingRaw = await getAmountInAddresses(blockFrost, JELLY, [
    "stake1u8yjy30a56m2838092c37spgjnnhpunttpdkzlvrr86kr8crgcuhe", // Chunk pool
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // Burn wallet
  ]);

  const vesting = Number(vestingRaw) / 10 ** 6;
  return {
    circulating: (total - vesting).toString(),
    total: total.toString(),
  };
};

export default fetcher;
