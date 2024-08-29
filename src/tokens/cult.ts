import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const cult = "dce34158d07be7187401a756a3273b792f6476e2ea09c3f2ae7b229d63756c74";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 69_000_000_000;

  const burnRaw = await getAmountInAddresses(blockFrost, cult, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const burn = Number(burnRaw);
  return {
    circulating: (total - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
