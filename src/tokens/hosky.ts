import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const HOSKY =
  "a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e15;
  const treasuryRaw = await getAmountInAddresses(blockFrost, HOSKY, [
    "stake1uyhr6j0v95y3nwemsfyw8l3ant90wruclgwe9ktnm5ptk8qhfnyt6", // charles
    "stake1uxgekrcht2nz7eag9kffkh5s2hcpqswaakf9synqdhs82zg6x25pc", // tbd
    "stake1u87awjfd5mdufylf0zzeuwz6vpllp0wz0elklphl833mqrchvwzys", // rugpool
    "stake1u83p8p9uvdcglucefnxxjc79u54zv3e3qptsx5qjcwxq5rcjzrlwk", // meme
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
