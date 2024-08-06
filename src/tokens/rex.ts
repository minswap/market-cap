import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const rex =
  "61fe4feee9d051c75b20d11701c3154ae95d9857bd429ffb85087eae526578";

const rexFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;

  const burnRaw = await getAmountInAddresses(blockFrost, rex, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4",
  ]);

  const burn = Number(burnRaw);
  return {
    circulating: (total - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default rexFetcher;
