import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MIRA = "160a880d9fc45380737cb7e57ff859763230aab28b3ef6a84007bfcc4d495241";
const TREASURY_ADDRESSES = [
  "stake1u8u8czgsydjjm4996maz3g8jkk48ft3ezwhnklna220w6pglrlsl4",
  "stake1uydyqtn0ys86nwv8rp8l6933va4yzdtjx0zr0jseannm23gdm8uuc",
  "stake1u8qjh854gy66knmpemu32pstmp5dy67txdya0cqlxeuwl3qpd5qxg",
  "stake1u9afgy0npvt9sal5vzlm5t6n5uyvch8t9mmznhtkn9wjacgfdtldf",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9; // 1 billion
  const treasury =
    Number(await getAmountInAddresses(blockFrost, MIRA, TREASURY_ADDRESSES)) /
    1e2;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
