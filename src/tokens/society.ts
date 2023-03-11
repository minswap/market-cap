import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 700_000_000;
  const PROJECTOR_REWARDS = 56_000_000;

  const axios = getAxiosInstance(options);

  const info = await axios("https://city.theapesociety.io/api/getsocietyinfo");

  const emissions = info.data.emissions;
  const burned = info.data.burned / 1e6;

  return {
    circulating: (total - burned - emissions - PROJECTOR_REWARDS).toString(),
    total: (total - burned).toString(),
  };
};

export default fetcher;
