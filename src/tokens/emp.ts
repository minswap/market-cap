import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 200_000_000;
  const circulating: number = await fetcher.axios
    .get("https://token.empowa.io/emp/supply")
    .then((res) => res.data.circulating_amount / 1e6);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
