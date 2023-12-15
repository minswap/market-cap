import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const OPT = "7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e4c494649";
const TREASURY_ADDRESSES = [
  "addr1q9gt5vycpjqmqddvjrl6tf4ctn2tlvpsls5qa7h862vvqxgve9jeadjstl54dnds5ye4f8jnkm404ryhz527cucfgwlqnrargr",
  "addr1q8n6xylsyg3fuye3xvxlpxvumdkutpvc07p6z6js6g85hn5gdxvcfq8mr6rzq7gkegy0xkt9kp6u8vxxrcvd4058p7aq7zn9jd",
  "addr1q9t9dlhshmcdqsuu799mktwpxmw35w3rffj63xzphyquksyk2q0gxhpk3tlvuer9jyryxe73xzgc76n58vyg3d8kgcdqex46uk",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 40e6; // 40 million
  const treasury =
    Number(await getAmountInAddresses(blockFrost, OPT, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
