import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const GUMMY =
  "394d8a0021c8825ad9385c1112009994e37b7b53c0c406d389d452db47756d6d79";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 10_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, GUMMY, [
    "stake1u8szpq85z7f9jv3nvtltzzkv025hpgaql2ec82v7lffse2cjg6lam", // $gummy-treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, GUMMY, [
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
