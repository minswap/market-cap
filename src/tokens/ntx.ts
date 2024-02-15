import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const circulating = await fetcher
    .axios(
      "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=ntx&q=circulatingsupply"
    )
    .then((res) => res.data.toString());
  const total = await fetcher
    .axios(
      "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=ntx&q=totalsupply"
    )
    .then((res) => res.data.toString());
  return {
    circulating,
    total,
  };
};

export default fetcher;
