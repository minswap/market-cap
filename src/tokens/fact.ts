import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FACT =
  "a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FACT, [
    "stake1uy4kjauul2gt5qqlqnn0dmtzj28hxyfzyxjfdz86r0cr87s0ukjhn", // Orcfax Validators
    "stake1uxgrkg2rts6mq5h49y87mfldpt8tec0dj5lwgqg3twsslgse2ce4t", // Orcfax Launchpad
    "stake1u8423m8m6fr5zmyrkf3h88cm8p95v4uu0w644ls777r0sash9a2hn", // Orcfax Team
    "stake1uxuw8rufp4004efjhy9jx7l5q0sc9l6m5ynre0awpme3keqpgae4v", // Orcfax ISPO Rewards
    "stake1u87ln5j5dmmhmaqytvwvwfpe7cfjmhfqd492xrlqhqtawwsfg2vjj", // Orcfax Foundation
    "stake1u9sk73f326aynajlrxvwe6rf5nvaueegsen8rgszwfzjecq448gkg", // Orcfax Ecosystem
    "stake1uyc63ewaqvtz7zzf3m23qmlyerlq768xv78y0n9k95y3qwggnajpq", // Orcfax Yield Farming APY
    "stake1uyfc4cyqwn9m7wy67s4xnnct9um3kte7pe3t9arwp6v5vmqqtkqt2", // Orcfax Advisors
    "stake1u98md374myy2lxdzdzcm8rrscqtaeserdn9ql5t7ds87mgssejnxp", // Orcfax Promotions
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
