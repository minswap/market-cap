import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FET =
  "815418a1b078a259e678ecccc9d7eac7648d10b88f6f75ce2db8a25a4672616374696f6e2045737461746520546f6b656e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 200e16;
  const blockFrost = getBlockFrostInstance(options);
  const treasuryRaw = await getAmountInAddresses(blockFrost, FET, [
    "stake1uyyxjvthz4udwdrzr9pkkudpylasg99ufdzu7gpdfckxf2s5peell",
    "stake1ux94pdq42nwx0g24ea3myjcnd8tvl354ku4ygedtgm7sfgc2hugz9",
    "stake1uxerycuwj09h2n6wydjp4vk936la23p9dvn37ezlkmdl5ycq38hr4",
    "stake1uypwcfxvg7uyzkyeue8fglq6fx7uxmampr2ahylyy4rg38cvky2pr",
    "stake1ux7pa94sgkzd0yawsu9e9ddj0vr07psyezksfek24m9wn2qtjf62u",
    "stake1u8qzt94vyvfvvs4qan02axtfwj2hz4dcqefpehara5rdh4q6h9xka",
    "stake1uy74mhj5x3jdf8d9446xcwrw723pvqelksxwwxu5c6t799qcnww0q",
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString() / 1e10,
    total: total.toString() / 1e10,
  };
};

export default fetcher;
