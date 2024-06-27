import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const RAUSI = "c80d335ae2206381ae3dfe07b1ef38e43af95736e7f5d4f150663c255241555349";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 8_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, RAUSI, [
    "addr1wypryvmw8z8yn9yqlyact9njtrkndu0g0gvq9q5llq4rppc549g39", // Reserve, locked until 01-2025
    "addr1w9szsx54qadp2yqe2xqrh6fmta6vuvqwtd5zsk7ec6j9sasmxhv3w", // Reserve, locked until 06-2028
    ]);

  const burnRaw = await getAmountInAddresses(blockFrost, RAUSI, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burnsnek address
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
