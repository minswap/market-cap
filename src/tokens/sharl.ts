import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SHARL = "590f6d119b214cdcf7ef7751f8b7f1de615ff8f6de097a5ce62b257b534841524c";
const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 999_000_000_000;
  const treasury_team_and_distributorsRaw = await getAmountInAddresses(blockFrost, SHARL, [
    "addr1xxyyxezq2d2qkrusm2fvkztm696egu75yrjs2r5psgvkuzyggdjyq565pv8epk5jevyhh5t4j3eagg89q58grqsedcyqgcrtav", // community wallet
  ]);

  const uncirculated = Number(treasury_team_and_distributorsRaw);

  return {
    circulating: (total - uncirculated).toString(),
    total: total.toString(),
  };
};

export default fetcher;
