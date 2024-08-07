import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const VYFI = "804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f56594649";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 450_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, VYFI, [
    "stake1u9rs4usucfu2ymfeeem2dnvfsdxl9sm7vpvd8pkc4cym8rsge78sh",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
