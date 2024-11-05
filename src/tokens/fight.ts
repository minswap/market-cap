import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FIGHT = "7d869e0e6f936c3299a8b8df2b8f13d5233801e11676ff06e78e8dbe4649474854";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 450_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FIGHT, [
    "stake1uygzdup55m354t6nx9nlj9eqhquh5rfue4tzm3yppaxr6vgz6cspc", // $fight.coin
  ]);
  const burnRaw = await getAmountInAddresses(blockFrost, FIGHT, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // $burnsnek
  ]);
  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
