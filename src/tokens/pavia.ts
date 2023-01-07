import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const PAVIA = "884892bcdc360bcef87d6b3f806e7f9cd5ac30d999d49970e7a903ae5041564941";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 2e9;
  const blockFrost = getBlockFrostInstance(options);
  const treasury = await getAmountInAddresses(blockFrost, PAVIA, [
    "addr1qx49wuqaa0j83z4y04nyltpcmf602f0afn5s84l7a9wnjryg090a5a6en7e483rh98d67efcenetg9xpr6fvv2llmhts837axc",
  ]);
  return {
    circulating: (total - Number(treasury)).toString(),
    total: total.toString(),
  };
};

export default fetcher;
