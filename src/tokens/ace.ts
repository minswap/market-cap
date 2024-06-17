import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ACE = "7d9aabc78703947e931e28273a96cf7412039fbd2e54a90ffb17239c42616279506f726b65.";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, ACE, [
    "stake1u8wwshdrztua5qhd9g06g68692dvrgqksncccpxv7pgpzwgd5mxuy", // Treasury
    "stake1uxmtrg8cs7d86u8hydvpgjntgnn8apvrpqawaff0f9a270gfhpzpg", // acecoinada
    "stake1u82ls6hlnx0hh8ph5fl6kqdxx7mvw9kqz2563l7ukhxwxec0mtv4y", // Farmbot
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, ACE, [
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
