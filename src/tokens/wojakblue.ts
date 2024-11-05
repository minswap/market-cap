import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const WOJAKBLUE = "a1b284d7218dd63772c67ca26ab73721a196b404929cddef595f9967574f4a414b424c5545";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 69420000000;
  const treasuryRaw = [
    "addr1q90m9sd7kwdt2vusmzlwprwycsys7ayjxtyagju89n3az27y9mpw78dw8u729jy27kwmz4w623qxt89nxjva06ujkwuqtpsejr",
  ];

  const burnRaw = ["addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4"];

  const treasury = Number(await getAmountInAddresses(blockFrost, WOJAKBLUE, treasuryRaw));
  const burn = Number(await getAmountInAddresses(blockFrost, WOJAKBLUE, burnRaw));

  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
