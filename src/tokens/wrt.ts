import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const headers = {
  "Accept-Encoding": "gzip, deflate, br",
};

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 1e8;
  const circulating = await fetcher.axios
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
