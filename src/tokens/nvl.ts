import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NVL =
  "5b26e685cc5c9ad630bde3e3cd48c694436671f3d25df53777ca60ef4e564c";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 21e6;
  const treasuryRaw = await getAmountInAddresses(blockFrost, NVL, [
    "stake179qxx9fyg59ad4x7vpnksxlkc93nsj5zc2v3hy8up2kangc7qzvzh",
    "stake179kx2h763naj8nm8uujxe9q0xksnu8t05p5rzgxnmez9nsc8kpzhd",
  ]);

  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
