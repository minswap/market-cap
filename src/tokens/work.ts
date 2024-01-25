import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const WORK =
  "bbd0ec94cf9ccc1407b3dbc66bfbbff82ea49718ae4e3dceb817125f24574f524b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 300_000_000n;

  const treasury = await getAmountInAddresses(blockFrost, WORK, [
    "stake1u943hr3hqpmk6yc4a2vyk5vkjrngj8kdfaz28r52flmn5hgcaczcj", // $work.courses
    "stake1u872kmf52n3jdf76rcklllpp6l5w5nmjtzeclvhzysq583qurlgzl", // $work.liquidity
    "stake1uxrwm3hzkjhulhv6nhgvmhw4lq6ckq9z5xdd8prt27dyg4cx3p6w7", // $work.team
    "stake1uyt07yq2fdkvmpvgvt24ge4r5luv0h76akmmx7prrs5k94q09rpc7", // $work.treasury
    "addr1v8d9p0fqrwxkp63nspcv47esgrmjhv9hjfv8z6ptyludlnqhwdlhh", // $work.staking
  ]);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;

