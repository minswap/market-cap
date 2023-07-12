import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FLAC = "8daefa391220bd0d8d007f3748d870f7f3c106040314c8515ccc35a5464c4143";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FLAC, [
    "stake1u9ll9vjjqkgyau7nteehe4aufxfx4qq0wr4vzs36gc8vl9sghkjg4", // treasury
    "stake1u9sedsmwcmt6za0rhqywryyydl3f7s74ntfk5dhzaev2fkcgp7p36", // team
    "stake1uygtdaws5xvjksv8ccqza8sqfv93jdmeuq8jw3xe48l4p8s9r550q", // marketing
    "stake1u80f822sv5gag205l0xpl85jl0yqf4255qmpa407mwxrzsgzpavty", // parternships
    "stake1uxc5n75f9fr75d734tnj4gayf3pxzwm84w8nauh5tdz9d6c40yuv8", // liquidity
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
