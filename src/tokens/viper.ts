import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getMaestroClient } from "../utils";

const VIPER =
  "caff93803e51c7b97bf79146790bfa3feb0d0b856ef16113b391b9975649504552";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const total = 76_715_880_000;
  const treasuryRaw = await getAmountInAddresses(maestro, VIPER, [
    "addr1q8hcfzrpjde5geldv4a2lx9njms24f5afge2pgryd7avueaejeq5ph79pnsgh798h05ffe08a0ueq6rtxpxrx8ntxq8sjksh9n", // airdrop_2
    "addr1qydndhsnzlhxtzazl5y4jaup40kk0ucv3njhdjrt5pspan97qptktvzfzy40dnc6544xpfckwlf8kkentendpql7z89qlcp444", // airdrop_3
    "addr1q9knde3r2wvhk8fjajchlfuh52k2jc2df65m9ymnxv4v85fkymz384ls0rwxwzx74xh4xc5adfrmhp9lr5m7p8gzmljq0s30ne", // devwallet
  ]);

  const burnRaw = await getAmountInAddresses(maestro, VIPER, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4",
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
