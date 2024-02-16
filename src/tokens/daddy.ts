import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DADDY =
  "6e6098846537ca48ff18eac70b7f5040c69ba2c5570521b6eb00fdf56461646479";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 100_000_000_000;

  const burnRaw = await getAmountInAddresses(blockFrost, DADDY, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // SNEK burn address
  ]);

  const burn = Number(burnRaw);

  return {
    circulating: (total - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
