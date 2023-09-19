import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FET =
  "815418a1b078a259e678ecccc9d7eac7648d10b88f6f75ce2db8a25a";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 200000000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FET, [
    "stake1uyyxjvthz4udwdrzr9pkkudpylasg99ufdzu7gpdfckxf2s5peell", // DEX funds
    "stake1ux94pdq42nwx0g24ea3myjcnd8tvl354ku4ygedtgm7sfgc2hugz9", // Reserve funds
    "stake1uxerycuwj09h2n6wydjp4vk936la23p9dvn37ezlkmdl5ycq38hr4", // Development funds
    "stake1uypwcfxvg7uyzkyeue8fglq6fx7uxmampr2ahylyy4rg38cvky2pr", // Fraction Estate funds
    "stake1ux7pa94sgkzd0yawsu9e9ddj0vr07psyezksfek24m9wn2qtjf62u", // Marketing funds
    "stake1u8qzt94vyvfvvs4qan02axtfwj2hz4dcqefpehara5rdh4q6h9xka", // Founder - Daniel Johnsen
    "stake1uy74mhj5x3jdf8d9446xcwrw723pvqelksxwwxu5c6t799qcnww0q", // Charity funds
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
