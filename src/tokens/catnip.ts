import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CATNIP =
  "633f2e2c5280417c6b76055eda54fc07de984c122c01573ea4a9e8234361746e6970";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 900_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CATNIP, [
    "stake178lgmc2vgwkvr9dll5keap2fvga7f6sanu0rt0902skr3ms56772e", // Treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, CATNIP, [
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
