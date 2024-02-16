import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

// eslint-disable-next-line unused-imports/no-unused-vars
const MNT = "43b07d4037f0d75ee10f9863097463fc02ff3c0b8b705ae61d9c75bf";

const TOTAL_SUPPLY = 100_000_000;

const MNT_SUPPLY_ADDRESS = "https://www.mynth.ai/api/token-supply";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  let treasury = 0;

  try {
    const axios = getAxiosInstance(options);
    const response = await axios.get(MNT_SUPPLY_ADDRESS);

    treasury = response.data.current_supply;
  } catch (error) {
    console.error(error);
  }

  return {
    circulating: (TOTAL_SUPPLY - treasury).toString(),
    total: TOTAL_SUPPLY.toString(),
  };
};

export default fetcher;
