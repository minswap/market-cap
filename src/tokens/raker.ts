import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const RAKER =
  "ace2ea0fe142a3687acf86f55bcded860a920864163ee0d3dda8b60252414b4552";
const TREASURY_ADDRESSES = [
  "addr1q8djvsvq45pff7vmyvqdujpudkwpzr3cdejqsxg5r6qg60utvn6keknqc0ea3rs3c96naytguxq3pspqn5fkjltmr95srtewf6", // main wallet
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 10_614_254; // 10,614,254 million
  const treasury = Number(
    await getAmountInAddresses(blockFrost, RAKER, TREASURY_ADDRESSES)
  );
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
