import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SNUK = "246d6a8493dd02c1243ccae10b3275f318e4f3144140d05c4c28c422536e556b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SNUK, [
    "stake1u8fa4qqljq4kz3hrwnmf76t9w383vl9058rs2mj767hg79g30xyee", // $Snuk
    "stake1uxdxf8sjds7nrz8fymjyjrp5kw4cjtdvn6n69qrhkfz8jncnppg45", // $Snuk-staking
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SNUK, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn address
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
