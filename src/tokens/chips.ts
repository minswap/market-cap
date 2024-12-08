import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHIPS = "5df9a1b9af5172602cbf8e4ba9c2a608c3820fc6e5d8c5e48f2d907c5468652047697261666665";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CHIPS, [
    "stake1uxtyqt2qck9mcxek68vqmyyly95a9h7n7qk40gxezp3uxvs9cmtjr", // Treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, CHIPS, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn address
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);

  return {
    circulating: (total - burn - treasury).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
