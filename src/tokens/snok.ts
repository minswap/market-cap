import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SNOK = "03dc510dbd1d1321edc06d8ae013f55fdd79f390c7415e2a09b64797534e4f4b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SNOK, [
    "stake17x7ep02m028rqsnrqmse4zyn8nr3v80nkeshq73n2xddxnsmw0uuw", // $snoktreasury
  ]);

  const treasury = Number(treasuryRaw);

  const burnRaw = await getAmountInAddresses(blockFrost, SNOK, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);
  const burn = Number(burnRaw);

  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
