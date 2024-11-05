import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const GME = "e4b8e9d247d9aa043bb9e13b38989b11b02c595450e6313aebdf6c1f47616d6553746f70";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 21e6;

  const burnRaw = await getAmountInAddresses(blockFrost, GME, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const burn = Number(burnRaw);
  return {
    circulating: (total - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
