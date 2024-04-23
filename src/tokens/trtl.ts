import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TRTL = "52162581184a457fad70470161179c5766f00237d4b67e0f1df1b4e65452544c";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 356_000_000_000;

  const treasuryRaw = await getAmountInAddresses(blockFrost, TRTL, [
    "stake1u858q8m5vxffh7rpff7p9spcqtvjac0xce620zlvqyd8rcgxfw9lj", // $TRTL
    "stake1u908d0tv3re46g58vnwndvjewd7s6mccs7k2gecs7f0n7cq5g89gp", // Owner
  ]);

  const treasury = Number(treasuryRaw);

  const burnRaw = await getAmountInAddresses(blockFrost, TRTL, [
    "addr1xy9phln4e5q23w533z7nme7sxr3p6lpldqhsyc8u5qd9c2mudsgax8xq9e4qr8f4yu4cxsghtapg282z5wn0nyjgtmsspwevz8", // 150 year lock
    "addr1x8gm0yhvdzv2a4n6rm02vfyez6x49nsj2dls4ml7t3rl7tw3k7fwc6yc4mt858k75cjfj95d2t8py5mlpthluhz8luks03cwcj",
    "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxzwccf8ywaly0m99ngq68lus48lmafut7ku9geawu8u6k49suv42qq", // min contract
    "addr1w93rz3ae8p3elzn0sqfu37hyzw0up98r2kgjjdmdq9wshmck40yr8", // hosky burn
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // snek burn
  ]);

  const burn = Number(burnRaw);

  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
