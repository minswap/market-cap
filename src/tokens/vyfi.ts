import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const VYFI = "804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f56594649";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 450_000_000;
  const treasuryRaw = await fetcher.getAmountInAddresses(VYFI, [
    "stake1ux3rhes4an7469fqfw794cg8qaxltj3srhlprhast5v6wsqkm26ks",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
