import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAxiosInstance } from "../utils";

const headers = {
  "Accept-Encoding": "gzip, deflate, br",
};

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const axios = getAxiosInstance(options);
  const total = 1e8;
  const circulating = await axios
    .post(
      "https://api.mainnet.wingriders.com/graphql",
      {
        query:
          "{wrtDistribution {total {lockedWrt releasedWrt undistributedWrt}}}",
      },
      { headers }
    )
    .then((res) => res.data.data.wrtDistribution.total.releasedWrt);

  return {
    circulating: (circulating / 1e6).toString(),
    total: total.toString(),
  };
};

export default fetcher;
