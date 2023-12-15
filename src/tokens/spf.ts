import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SPF = "09f2d4e4a5c3662f4c1e6a7d9600e9605279dbdcedb22d4507cb6e75535046";

const SPECTRUM_NETWORK_VAULT_ADDRESSES = [
  "addr1v8njca4vkseetespu6jjtlk25sy46ya3qvrcp7n5c7zy9esj2g22a",
];
const SPF_TREASURY_ADDRESSES = [
  "addr1vy8h9l37fzdwpq8etmftagdc80trh9jjg0avt3je26szu8g820gnj",
];
const SPF_REWARDS_ADDRESSES = [
  "addr1vx3vcluw7qtulynhzsy4prfdmnjth8w52ejg2qeclsz7argu26gcf",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9; // 1 billion

  const treasury =
    Number(
      await getAmountInAddresses(blockFrost, SPF, SPF_TREASURY_ADDRESSES)
    ) / 1e6;

  const spnVault =
    Number(
      await getAmountInAddresses(
        blockFrost,
        SPF,
        SPECTRUM_NETWORK_VAULT_ADDRESSES
      )
    ) / 1e6;

  const unclaimed =
    Number(await getAmountInAddresses(blockFrost, SPF, SPF_REWARDS_ADDRESSES)) /
    1e6;

  return {
    circulating: (total - treasury - spnVault - unclaimed).toString(),
    total: total.toString(),
  };
};

export default fetcher;
