import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const LCC = "03c2eb4f942703fa965df42ba8ac57e27c5e86802d058da63f4d888b4c4343";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 450_000_000;
  const treasuryRaw = await fetcher.getAmountInAddresses(LCC, [
    "stake1ux8xh8xc4clp7nl7qplnz48y5za46dez0wmnr5z5fkrk8ks4ncp2w",
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
