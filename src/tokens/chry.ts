import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHRY = "75fcc276057db5fc48eae0e11453c773c8a54604c3086bf9d95ac1b743485259";
const TREASURY_ADDRESSES = [
  "addr1qy00gp8ldzs3hh0tkqd0ummmxlt4fed49fh25hjh2mhcy6alec8dm697qgqjpx54m3l47z8nmg46e85m67qwwfdt5yjqlqncpn",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 88e6; // 88 million
  const treasury = Number(
    await getAmountInAddresses(blockFrost, CHRY, TREASURY_ADDRESSES)
  );

  return {
    circulating: ((total * 1e6 - treasury) / 1e6).toString(),
    total: total.toString(),
  };
};

export default fetcher;
