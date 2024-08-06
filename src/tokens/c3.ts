import { defaultFetcherOptions,SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const C3 =
  "8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a434841524c4933";
const TREASURY_ADDRESSES = [
  "addr1q82wf56fmjxgv4xuhmdw5vsl8mkwvh8ag5q0hpm0t70kkj9kexs7kszymxq6f9400u4xkg5n428e92gkhk30x3m6h4ls6ya7lr",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const treasury =
    Number(await getAmountInAddresses(blockFrost, C3, TREASURY_ADDRESSES)) /
    1e6;
  const total = 100_000_000;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
