import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const MILKv2 =
  "afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb4d494c4b7632";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 10_000_000; // 10 Million with 6 decimals
  const treasury =
    Number(
      await fetcher.getAmountInAddresses(MILKv2, [
        "addr1q9rtclgcvqwhutjnkr3acfgetxn2f6qjkzjcdc4m5fes868g8gfztpemy35qyh208nz9fp2gh5pnc2z6zkcrleyp4j0s8x3g5c", // treasury
        "addr1v8h4fm4ejd9w8wr8lkkeu0pe4m00ycl2vysd3jvs9mgw7ps8sm9rt", // yield rewards
      ])
    ) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
