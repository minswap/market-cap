import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MILK = "8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 10_000_000n;
  const treasury = await getAmountInAddresses(blockFrost, MILK, [
    "addr1v8c3mztrzpjqxzrcl8rvxln8xyvanz6pufuaju7rwkglnychv3cg3", // treasury
    "addr1v8h4fm4ejd9w8wr8lkkeu0pe4m00ycl2vysd3jvs9mgw7ps8sm9rt", // yield rewards
    "addr1q9rtclgcvqwhutjnkr3acfgetxn2f6qjkzjcdc4m5fes868g8gfztpemy35qyh208nz9fp2gh5pnc2z6zkcrleyp4j0s8x3g5c", // treasury
  ]);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
