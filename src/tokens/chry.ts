import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHRY = "75fcc276057db5fc48eae0e11453c773c8a54604c3086bf9d95ac1b743485259";
const TREASURY_ADDRESSES = [
  "stake17ya8xvcc5h2mkeladwnw8vutr5qya3vau6z9dw7zgs6mmrgtqgz58",
  "stake1u8ffzkegp8h48mare3g3ntf3xmjce3jqptsdtj38ee3yh3c9t4uum", // Community incentives + team tokens held at TosiDrop
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
