import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CATS = "bbb0be3f57598bbf6a7d6ce18a60700beceb6904923a6a555ca0345443415453";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 88_888_888_888_888_900;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CATS, [
    "stake1u923hpvm0kurh8mrav0rcrwfd0qfyguxq3wt9qjlynpqcjgrn8yu8",
    "stake1u8fpm0l9wq6ukw7932vwkhlpthhwlk7hx4vx6xe35dzplaq6ckdj5",
    "stake1u9a7k0k2t0amdsyyvuyvr6wfdk96egxculjs7ydmehc5ueqljenvv",
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, CATS, [
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
