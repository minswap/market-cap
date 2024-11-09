import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const HYDR = "4a17babb62367c0def1615e0e75d20cda9f1b5c1cd4a55c86661777f48594452";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 45_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, HYDR, [
    "stake1uywnmnftytaqp2wpx29qvmc6jf3ahhphxwvcrf2erzfa43cuee5fe", // $hydrodrip
    "stake1u82ls6hlnx0hh8ph5fl6kqdxx7mvw9kqz2563l7ukhxwxec0mtv4y", // Farmbot
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, HYDR, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn address
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
