import { /*defaultFetcherOptions,*/ SupplyFetcher } from "../types";

//const CBTC = "4190b2941d9be04acc69c39739bd5acc66d60ccab480d8e20bc87e3763425443";

const fetcher: SupplyFetcher = async (/*options = defaultFetcherOptions*/) => {
  const total = 21_000_000;
  const circulating = 19_550_000;
  return {
    total: total.toString(),
    circulating: circulating.toString(),
  };
};

export default fetcher;
