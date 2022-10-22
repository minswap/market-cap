import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DISCO =
  "5612bee388219c1b76fd527ed0fa5aa1d28652838bcab4ee4ee63197446973636f696e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 5777777777;
  const treasuryRaw = await getAmountInAddresses(blockFrost, DISCO, [
    "addr1xy37w4aqgukmhljn229a4m0ccsk3y49x40tfrnj3u8gw96pruat6q3edh0l9x55tmtkl33pdzf22d27kj889rcwsut5qaa2r64",
    "addr1xywvz3224hc5h5uu8g3x6rk6pjdps6c2acewa735haydqmcuc9z54t03f0fecw3zd58d5ry6rp4s4m3jamarf06g6phsgzp0xt",
    "addr1xxy8exmrl37hk2pyct5mgc45tjh53udzfhqfxavzlc743vug0jdk8lra0v5zfshfk33tgh90frc6ynwqjd6c9l3atzesqljg09",
    "addr1xy306nxnhkseaw4rlgfa55skyd342z4mtq5k2j4jux7k4kfzl4xd80dpn6a287snmffpvgmr259tkkpfv49t9cdadtvssms0kr",
  ]);
  const treasury = Number(treasuryRaw) / 1e8;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
