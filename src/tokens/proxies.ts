import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getMaestroClient } from "../utils";

const PROXIES =
  "20cd68533b47565f3c61efb39c30fdace9963bfa4c0060b613448e3c50524f584945";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const total = Number(21000000);
  const treasuryRaw = await getAmountInAddresses(maestro, PROXIES, [
    "stake1uxrtzq4epgjxz7xulm97ups30rml843trc5x8zulxxzf2rq7effsj", // Treasury
  ]);
  const treasury = Number(treasuryRaw) / 1e6;

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
