import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHRY = "75fcc276057db5fc48eae0e11453c773c8a54604c3086bf9d95ac1b743485259";
const TREASURY_ADDRESSES = [
  "stake1uxluurkaazlqyqfqn22acl6lprea52avn6da0q88yk46zfqrc93qj",
  "stake1u8ffzkegp8h48mare3g3ntf3xmjce3jqptsdtj38ee3yh3c9t4uum", // team tokens held at SEALS' Vending Machine
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 88e6; // 88 million
  const treasury = Number(
    await getAmountInAddresses(blockFrost, CHRY, TREASURY_ADDRESSES)
  );

  return {
    circulating: ((total * 1e6 - treasury) / 1e6).toString(),
    total: total.toString(),
  };
};

export default fetcher;
