import axios from "axios";

import { SupplyFetcher } from "..";

const fetcher: SupplyFetcher = async () => {
  const circulating = await axios(
    "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=agix&q=circulatingsupply"
  ).then((res) => res.data);
  const total = await axios(
    "https://tokensupply.singularitynet.io/tokensupply?tokensymbol=agix&q=totalsupply"
  ).then((res) => res.data);
  return {
    circulating,
    total,
  };
};

export default fetcher;
