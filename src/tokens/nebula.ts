import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NEBULA =
  "3744d5e39333c384505214958c4ed66591a052778512e56caf420f624e4542554c41";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9;
  const treasuryRaw = [
    "addr1qyruqqptlds9ruwxq45y28669y7q4qu233hmzt2ck260f2s296su9q00c29c8ud846jhyayzeprsa4fygumw0ycrmgssxu8q3z",
    "addr1q8s7yqngv2lpwrf6e3wn0qplz6dsw2f9scdex78uxfg58xv69yv7hnkjauqsj33hktr6ygamt58m7rsjm4elpmlaycssdyaju6",
  ];

  const burnRaw = [
    "addr1qxte5udxtcgd32grn4pd2w2faw7cax3p4lj22e6exmftu28ezkp45z5cs5g5yfpksh8uupjrzkjjyv3c2t23ah04s0tq40n2va",
  ];

  const treasury =
    Number(await getAmountInAddresses(blockFrost, NEBULA, treasuryRaw)) / 1e8;
  const burn =
    Number(await getAmountInAddresses(blockFrost, NEBULA, burnRaw)) / 1e8;

  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
