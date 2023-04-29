import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SHEN = "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd615368656e4d6963726f555344";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e12;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SHEN, [
    "stake1uyd6tfxa3sae586zjvll7qjx8ywj9x8l3dddgc8dkc0tshssd5g6e",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: (total - treasury).toString(),
  };
};

export default fetcher;
