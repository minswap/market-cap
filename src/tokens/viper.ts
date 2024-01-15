import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const VIPER =
  "caff93803e51c7b97bf79146790bfa3feb0d0b856ef16113b391b9975649504552";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 76_715_880_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, VIPER, [
    "addr1q8hcfzrpjde5geldv4a2lx9njms24f5afge2pgryd7avueaejeq5ph79pnsgh798h05ffe08a0ueq6rtxpxrx8ntxq8sjksh9n", // airdrop_2
    "addr1qydndhsnzlhxtzazl5y4jaup40kk0ucv3njhdjrt5pspan97qptktvzfzy40dnc6544xpfckwlf8kkentendpql7z89qlcp444", // airdrop_3
    "addr1q9knde3r2wvhk8fjajchlfuh52k2jc2df65m9ymnxv4v85fkymz384ls0rwxwzx74xh4xc5adfrmhp9lr5m7p8gzmljq0s30ne", // devwallet
  ]);

  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
