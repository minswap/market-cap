import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const PIRATE =
  "bdf6ea73a43efded4503bd78e60f0bbce9111f29d235f4b890096f87";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 3e9; // 3 billion

  const burnRaw = await getAmountInAddresses(blockFrost, PIRATE, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const burn = Number(burnRaw);
  return {
    circulating: (total - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
