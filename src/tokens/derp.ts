import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DERP =
  "961f2cac0bb1967d74691af179350c1e1062c7298d1f7be1e4696e312444455250";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000n;

  const treasury = await getAmountInAddresses(blockFrost, DERP, [
    "stake1uy6r37f83ahqq47rx4wxgl28anmekvz9wqqgr2u09pw48egyaeqhv",
    "stake1u894gzwp4kg0uwmtz8k23g8cpkkc54gs6kd2ts4sedxanmcas4kh8",
    "stake1u8fhqlvckhllm0l0pkjl3a2zhvgpn966ljgu3was9s80s7suf7rzg",
    "stake1u9grfzm4qrwunvjrasegnz7d2gvg8zcdyjy58ar9ktjy0xqxx3cja",
    "stake1u8tnteyz5uk3xeja88e49j77efx86k5lf24lkm828z0h3jq3k4eu5", // minswap LP
  ]);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
