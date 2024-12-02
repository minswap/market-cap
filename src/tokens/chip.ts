import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHIP = "30d2ebdb2fec06142ee84e5120c2717b4d68a91bffd924420d94ddea43484950";

const TREASURY_ADDRESSES = [
  "addr1qypez7msuwynwjm77vtrmmn9pm5v22y5th26exxe0kepst24k83f37z3s7fapxjamxkeedc085vg0y34zgn8x4c5m05q5nzhsy", // reserved treasury
  "addr1q9v5l0dmy6jaz9dwkww9ghtg3yzfr6js2pejwyp6m7tjtk87hpufs2s7rtta3x4tfwa79qfht3ccxhwd7p835jytpa4qf2y00d", // staking rewards
  "addr1q90e9f6p69ad95998f5l9huuf70s3pd3m7yg9xynuypln3sr96ajdrxwdjdxrkayjn48qm2h35jxjdnsqlusfg027kyq97xapw", // yield farming treasury
  "addr1q9nczapcdhg7yc23ysun3tjtkx2lydkjw76pem86dw7htu69sqkqf5r066h5ca2g5qldne4yn8r3hxzm73ez6urgss3sruu6l2", // platform incentives treasury
  "addr1q8swgmuz39jpknze9q8ljmwq6ndse8wpp36d8xfcxf7vkj5qp8z9c4tw4tkxer2dlsejueexww9jdp867de9xqvw6ussslysgu", // marketing
  "addr1q8v6xff20j88n7jekxw53x0g3pp7c2gcsx738q456hue6m0u9w6rhn6wgwqpsg24jfnk79lexhuzpmaj4rf9ghtw73jqmp0e04", // airdrop
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockfrost = getBlockFrostInstance(options);
  const total = 1.6e9;
  const treasury = Number(await getAmountInAddresses(blockfrost, CHIP, TREASURY_ADDRESSES)) / 1e6;

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
