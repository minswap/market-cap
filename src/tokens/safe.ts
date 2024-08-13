import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SAFE = "81926a57a567c11f6dc502254c5ed2d11fdba4ed9f898916699c6f1753414645";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 420_698_008_135;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SAFE, [
    "stake1u9m784lg688hwhsfp72zmff522jcsp62m9txljtatujw5hgtk80fj", // Treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SAFE, [
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
