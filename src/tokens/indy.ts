import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 35_000_000;

  const response = await fetcher.axios.get(
    "https://analytics.indigoprotocol.io/api/stats/indy-circulating-supply"
  );
  const treasury = Number(response.data.circulatingSupply) / 1e6;

  return {
    circulating: treasury.toString(),
    total: total.toString(),
  };
};

export default fetcher;
