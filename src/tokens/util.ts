import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const UTIL = "0d90046ad35546156aaf790525133f7fc713ca2790e397784b85f5c85554494c";
const TREASURY_ADDRESSES = [
  "addr1q93xkjyjltq2n8txhzs75ksh0m63t9pjq6tlyrdyyyw8gxru5vh778h5098lal266fkv3t0mke9w4wqde9et9jtgpxssaeg575", // incentives & partnerships
  "addr1qymw4z9mwc350zp3fkgtmzs22rd4g66w6egpy7gtt4lnptjym6np02setzkqytguwrcm5dje0qzahxwrvc0pw07m6r7sfjpqln", // utility & dev fund
  "addr1q9gc42cyxvxa07l5w8f6l62cztd4c3q2jaax2ujqgzxg0jz4rptm4dertnuude4kgx959z95tg2rxvxxcggr84ddr5wq4qpw3f", // marketing
  "addr1q9g327d6c54tx6eek8xtclzavuneasslaq7pl9h7yu0nyshv7gwx2r64hkeyhtkdp9yky7feddfduq02ssgukxh5d6zsd0jf9a", // DAO
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100e9; // 100 billion
  const treasury = Number(
    await getAmountInAddresses(blockFrost, UTIL, TREASURY_ADDRESSES)
  );
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
