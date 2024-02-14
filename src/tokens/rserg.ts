import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 97_739_924;

  const circulating: number = await fetcher.axios
    .get("https://api.ergoplatform.com/info/supply")
    .then((res) => res.data);

  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
