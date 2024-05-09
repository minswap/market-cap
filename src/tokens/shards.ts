import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TOKEN =
  "ea153b5d4864af15a1079a94a0e2486d6376fa28aafad272d15b243a0014df10536861726473";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 4_998_034; //https://cardanoscan.io/token/ea153b5d4864af15a1079a94a0e2486d6376fa28aafad272d15b243a0014df10536861726473
  const treasuryRaw = await getAmountInAddresses(blockFrost, TOKEN, [
    "addr1w95dsllnucgg53lj8qhdcgjnw40hlsctkeh8udt7uhud2tgjfyagq", // DripDropz Instant Rewards
    "stake17yavsn3jqqxm29tcgrjpj8e960tf00hkkvzaqxv6tt8ud7s4kw5vn", // GameFi Incentives Reserves
    "addr1wx4ua0djv8c4fvkl8t08z0duf3lw8fl4qujvevwx4m9c7ygma04rr", // Blockchain-wide Distribution (Cardano) & SHARDS/ADA LP Rewards
    "stake17yqphvez52gkae448avqr5smpztvlrwmwsvfhgmp84laxes3zfyq0", // Private Investors
    "stake17yz7hzlx3fp3sfpagfhkwxjwuhr7ew9te676fa9zxdvpzccs2hvfx", // FPS Treasury
    "stake1u8yt8czlj5svzc4jvr3w230tsjklctw4tvhz43k5recvfvqwnvelg", // FPS Team Wallet
    "addr1z8cw3tst2mp2l3y7tkwv9nnz8wef63yg9ufevn4kwnq6rq275jq4yvpskgayj55xegdp30g5rfynax66r8vgn9fldndsjgezmx", // SaturnNFTio Static Staking Contract
    "addr1q8dp4sagd487pa5zjcfh3w6e6nsw9mgkuwtkpdw40ge432jnc0dqf7yufrtw3nsexjzghgdrnqpn8q8gandf3tk4jp0sjemnsw", // Danketsu Hustle Platform x FPS Missions Rewards
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
