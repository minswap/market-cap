import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SNEK = "279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 76_715_880_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SNEK, [
    "stake1u8zjwv6a8ztrl9xkcc90utn32y4jsrxep90z2967c5aqv6cxchhhv", // $snekcoinada
    "stake1u8ncs7903m7pxzfyrzxagzx0aey4aus2533eeqlnevw0h4qs2f82r", // $snekcoinvault
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SNEK, [
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
