import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 700_000_000;
  const projector_rewards = 56_000_000;

  const info = await fetcher.axios(
    "https://city.theapesociety.io/api/getsocietyinfo"
  );

  const emissions = info.data.emissions;
  const burned = info.data.burned / 1e6;

  return {
    circulating: (total - burned - emissions - projector_rewards).toString(),
    total: (total - burned).toString(),
  };
};

export default fetcher;
