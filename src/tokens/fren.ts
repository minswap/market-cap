import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const fren =
  "fc11a9ef431f81b837736be5f53e4da29b9469c983d07f321262ce614652454e";

const frenFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 420_069_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, fren, [
    "addr1qxphpfyj20ktpnjlsq09kgwzgkxkuy34njxxkdsq73cjagg40rlcjxutu5pq06qu2nq03gz4lyswfyd9f65qc6fqgqcqmvr092",
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, fren, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4",
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default frenFetcher;
