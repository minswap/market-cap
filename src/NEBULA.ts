import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NEBULA = "3744d5e39333c384505214958c4ed66591a052778512e56caf420f62";

const TEAM_ADDRESSES = [
  "addr1q8s7yqngv2lpwrf6e3wn0qplz6dsw2f9scdex78uxfg58xv69yv7hnkjauqsj33hktr6ygamt58m7rsjm4elpmlaycssdyaju6", // team
  "addr1qyruqqptlds9ruwxq45y28669y7q4qu233hmzt2ck260f2s296su9q00c29c8ud846jhyayzeprsa4fygumw0ycrmgssxu8q3z", // dev Vault
  "addr1qxte5udxtcgd32grn4pd2w2faw7cax3p4lj22e6exmftu28ezkp45z5cs5g5yfpksh8uupjrzkjjyv3c2t23ah04s0tq40n2va", // burn
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e6; // 1 billion
  const treasury = Number(
    await getAmountInAddresses(blockFrost, NEBULA, TEAM_ADDRESSES),
  );
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
