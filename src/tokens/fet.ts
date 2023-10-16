import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FET =
  "815418a1b078a259e678ecccc9d7eac7648d10b88f6f75ce2db8a25a4672616374696f6e2045737461746520546f6b656e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 200e6;
  const blockFrost = getBlockFrostInstance(options);
  const assetInfo = await blockFrost.assetsById(FET);
  const onchainSupply = Number(assetInfo?.quantity) / 1e10;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FET, [
    "stake1uyyxjvthz4udwdrzr9pkkudpylasg99ufdzu7gpdfckxf2s5peell", // fe.dex.funds
    "stake1ux94pdq42nwx0g24ea3myjcnd8tvl354ku4ygedtgm7sfgc2hugz9", // fe.reserve.fund
    "stake1uxerycuwj09h2n6wydjp4vk936la23p9dvn37ezlkmdl5ycq38hr4", // fe.dev.funds
    "stake1uypwcfxvg7uyzkyeue8fglq6fx7uxmampr2ahylyy4rg38cvky2pr", // fraction.estate
    "stake1ux7pa94sgkzd0yawsu9e9ddj0vr07psyezksfek24m9wn2qtjf62u", // fe.market.funds
    "stake1uy74mhj5x3jdf8d9446xcwrw723pvqelksxwwxu5c6t799qcnww0q", // fe.charity.fund
    "stake1u8qzt94vyvfvvs4qan02axtfwj2hz4dcqefpehara5rdh4q6h9xka", // founder - daniel johnsen
    "addr1wy08wwdmpp6wtkzzjnghpxn0wtm9zyp69s4fxe675yv06cs70pjxk", // Staking Rewards Vyfi
    "stake1uxmyhzdqv6e57xwkz3z93v996v3ktdctlda44jv76ese5pqwwg7ue", // Farming Rewards Vyfi
    "stake1uyuxqkvqwngv86g9m804kjnhmvunc52kk4kl8cm8fck5kwcjmx8sg", // Rewards Treasury Vyfi
  ]);
  const treasury = Number(treasuryRaw) / 1e10;
  return {
    circulating: (onchainSupply - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
