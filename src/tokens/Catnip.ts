import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DEGA = "633f2e2c5280417c6b76055eda54fc07de984c122c01573ea4a9e823";
const TREASURY_ADDRESSES = ["addr1x8lgmc2vgwkvr9dll5keap2fvga7f6sanu0rt0902skr3mh73hs5csavcx2mllfdn6z5jc3mun4pm8c7xk7274pv8rhqn4669u"];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 900000000;
  const treasury = Number(
    await getAmountInAddresses(blockFrost, DEGA, TREASURY_ADDRESSES)
  );

  return {
    circulating: ((total * 1e8 - treasury) / 1e8).toString(),
    total: total.toString(),
  };
};

export default fetcher;
