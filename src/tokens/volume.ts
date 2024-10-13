import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const VOLUME = "8d94085182fb206c28850f194defe748e455a104d5ff7466d90f537c566f6c756d65";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, VOLUME, [
    "stake1uy9yuyvugtmfaaww3sxdk7fyat7tc8u2jf2q9lnqksjy5aq9veu76", // Treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, VOLUME, [
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
