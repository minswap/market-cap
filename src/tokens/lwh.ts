import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const LWH = "defe216460d594211631fcfbd354f361c04645d6a0cfeead3d6f62836c65767679776966686174";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
const blockFrost = getBlockFrostInstance(options);
const total = Number(100_000_000);
const treasuryRaw = await getAmountInAddresses(blockFrost, LWH, [
  "stake1u9dz7rdqnx4rthc3rn9nt9mtvzve8tv6ek809c8z9ld89lspvnq2g",
  "stake1u9u5ema2qm8wthrkf7gc8423sg24ey0ucpw6cknhymt2uysclzez4",
  "stake1ux04u6ru8dduhsscza3309f2a86dxlzw6mx30va665d489gm2enja",
  "stake1uyn63uqt3aqjlq7gvtqh33zdvl4u8g9dj62q9svly24l50ck7p4kh",
  "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4",
  "stake1u997nsgekunxnauepkhz57prz86clz7tm0fwgclnv3pupzg095yak",
  "stake1u96vnsecj2dp6zeae8ywptp4u3fghkes8vrmwwpfwl47jysv8ksma"
]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: (total).toString(),
  };
};

export default fetcher;
