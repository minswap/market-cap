import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const VNM = "2d92af60ee429bce238d3fd9f2531b45457301d74dad1bcf3f9d1dca564e4d";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 150e6;
  const blockFrost = getBlockFrostInstance(options);
  const treasuryRaw = await getAmountInAddresses(blockFrost, VNM, [
    "stake1u8uv6eaj6ulpymd7ua6ag203fet6ypv9xj7aj8525vnjwyqlqyqsp",
  ]);
  const treasury = Number(treasuryRaw) / 1e4;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
