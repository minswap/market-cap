import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 280_125_000;
  const circulating: number = await fetcher
    .axios("https://production.revuto.com/api/v1/wallet/circulating_supply")
    .then((res) => res.data);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
