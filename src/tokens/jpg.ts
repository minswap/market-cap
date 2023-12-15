import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const JPG = "681b5d0383ac3b457e1bcc453223c90ccef26b234328f45fa10fd2764a5047";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const vestingRaw = await getAmountInAddresses(blockFrost, JPG, [
    "addr1wxhrjawva72parlra9zn8gmv5aeceh3yz666ck7yclfl3ls3vxuqw", // vesting
  ]);

  const vesting = Number(vestingRaw) / 10 ** 6;
  return {
    circulating: (total - vesting).toString(),
    total: total.toString(),
  };
};

export default fetcher;
