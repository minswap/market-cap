import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const RSBTC =
  "2dbc49f682ad21f6d18705cf446f9f7a277731ab70ae21a454f888b27273425443";

const ROSEN_BRIDGE_VAULT_ADDRESSES = [
  "addr1x8x6ca648w25x085dg8xs6k5e69yemr5hakcnl0gshmal6gahwzvy33q3jhr74lurpr9p0n8derw58fh7snq2zwxe8zsdkcqrj",
];

const ROSEN_BRIDGE_LOCK_ADDRESSES = [
  "addr1v8kqhz5lkdxqm8qtkn4lgd9f4890v0j6advjfmk5k9amu4c535lsu",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 21_000_000;

  const rosenBridgeVault =
    Number(
      await getAmountInAddresses(
        blockFrost,
        RSBTC,
        ROSEN_BRIDGE_VAULT_ADDRESSES
      )
    ) / 1e8;

  const rosenBridgeLock =
    Number(
      await getAmountInAddresses(blockFrost, RSBTC, ROSEN_BRIDGE_LOCK_ADDRESSES)
    ) / 1e8;

  return {
    circulating: (total - rosenBridgeVault - rosenBridgeLock).toString(),
    total: total.toString(),
  };
};

export default fetcher;
