import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const Ssss =
  "4de3c5d6b555c99c7f56a1f917567288f025f337cdf233d99e462a1353737373";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 7_777_777_777;
  const treasuryRaw = await getAmountInAddresses(blockFrost, Ssss, [
    "stake17xjrxzlfv3l9dtlykenxxf4zckh287hmwvzrg3pzhq7n6xqg39z66", // $Sssstreasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, gldsnek, [
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
