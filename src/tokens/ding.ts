import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 1_000_000_000;
  const circulating: number = await fetcher
    .axios("https://universe.pxlz.org/circulating")
    .then((res) => res.data);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
