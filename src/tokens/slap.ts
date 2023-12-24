import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SLAP = "1e2ab14b6921c545b836525477921fe000e14a3502fa729f60e8de85534c4150";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SLAP, [
    "stake1ux366xgzh78hh8hk0ep0824pz7ha306uese7u644h7wn86quca6l3", // $slapventures
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SLAP, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
