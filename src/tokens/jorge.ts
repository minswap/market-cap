import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const JORGE =
  "c0a7eb16fa55a982c63976c34af6e42cb1b5aeb9ab2a7aaec06f6cd04a6f726765";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, JORGE, [
    "stake1ux438zy2p4e5g8wqg0y8t3ydds02rmaf3eemj38nzn9ydgctfvyne",
    "stake1uyft8nlwshrfttzyn8g394d3rx8cck3wusy9l086q35rq9g9e78qd",
    "stake1u9psvwyfwskrvz22tlepfsenqzegd5jlyf8mf7hzwhar9mcqncm5y",
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, JORGE, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const treasury = Number(treasuryRaw) / 1e4;
  const burn = Number(burnRaw) / 1e4;
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
