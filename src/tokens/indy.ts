import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const INDY = "533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 35_000_000;
  const axios = getAxiosInstance(options);
  const response = await axios.get('https://analytics.indigoprotocol.io/api/stats/indy-circulating-supply');
  const treasury = Number(response.data.circulatingSupply) / 1e6;

  return {
    circulating: treasury.toString(),
    total: total.toString(),
  };
};

export default fetcher;
