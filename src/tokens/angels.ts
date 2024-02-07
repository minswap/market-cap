import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ANGELS =
  "285b65ae63d4fad36321384ec61edfd5187b8194fff89b5abe9876da414e47454c53";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 496_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, ANGELS, [
    "stake1uykqzz8gny3g5ar9upqhuvgjy7uw0fcxyp66cj8sgm9uyjq7h2xtc",
    "addr1qxpfunlur9rcr7zzvzqeha5mahfjc09zwc03u9uj6z6qdkeef44f0ar7f54mp0dkw0erpjddyq3ar4vhx6ye8acjg4eqr7jmz9",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
