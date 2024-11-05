import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DANZO =
  "bf3e19192da77dfadc7c9065944e50ca7e1a439d90833e3ae58b720a44414e5a4f";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 69e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, DANZO, [
    "stake17xnecta77s7r3qp9aryd79tln2wc2qs24sx9gvf4npcyptgqq4p4s",
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, DANZO, [
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
