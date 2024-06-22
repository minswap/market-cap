import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CTV = "9f452e23804df3040b352b478039357b506ad3b50d2ce0d7cbd5f806435456";

// Define the treasury addresses for the CTV token
const TREASURY_ADDRESSES = [
  "addr1qyjwhsj246x8nf9evkadxtt0crgg2qjp7mk76zdnm38r0qp397a6yhn3qpzwt3ekwvtmptfxd8427egmlrrmufxvkgtsna5evs", // $ctv4vaults - Vault Seeker NFT Staking Rewards
  "addr1qy5u9xul7vfhn3gvk68zzqfxxl6uxy5n7j3kq39aet06f4qh8u90v36crqhfj4stq2vmj98lyqzryd5nfg4j5ca6cjmqq9xzgt", // $ctv_reserve - Community controlled reserves
  // Add more treasury addresses as needed
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9; // Define the total supply of CTV, adjust as needed
  const treasury =
    Number(await getAmountInAddresses(blockFrost, CTV, TREASURY_ADDRESSES)) /
    1e6; // Assuming 6 decimal places
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;