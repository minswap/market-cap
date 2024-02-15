import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 3_840_000_000;
  const circulating = await fetcher
    .axios(
      "https://raw.githubusercontent.com/Cornucopias/circulating-supply/main/cs"
    )
    .then((res) => res.data.toString());
  return {
    circulating,
    total: total.toString(),
  };
};

export default fetcher;
