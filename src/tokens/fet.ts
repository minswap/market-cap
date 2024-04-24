import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FET =
  "815418a1b078a259e678ecccc9d7eac7648d10b88f6f75ce2db8a25a4672616374696f6e2045737461746520546f6b656e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 100e6;
  const blockFrost = getBlockFrostInstance(options);
  const assetInfo = await blockFrost.assetsById(FET);
  const onchainSupply = Number(assetInfo?.quantity) / 1e10;
  const treasuryRaw = await getAmountInAddresses(blockFrost, FET, [
    "stake1uyedlzmcwtn63sjmvau4rgr5jwwd98jzqv8lc5fe7v36c2gy7y3mq", // fe.dex.funds
    "stake1u9j7m6yrzw6ue0g2wyesqppf9qkkk86ac5x6gqy6axmx9xqtcv3n5", // Pending Burn Wallet
    "stake1uxs45y65rgrq9kzk4wjqf9wannky3vn3unhpy40jykg8fscnqdz2j", // fraction.estate
    "stake1uxa33njpprvxrjwtgpwechlf7y3kcxw6ddj2hf5s8e4z77snr6znd", // fe.charity.fund
    "stake1uytl9a6eup867pd4ljz9q5y968qpd0j9hg3e9luhh0dm9sqw2grpe", // founder - daniel johnsen
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
