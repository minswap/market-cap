import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CNCT = "c27600f3aff3d94043464a33786429b78e6ab9df5e1d23b774acb34c434e4354";

const cnctFetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 80_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CNCT, [
    "addr1q874njfl5kfdq5ruxj7ldz0xvsmqp8384hf4uqgser2pxsdh5gwrx54ucvssczqhjkragat8uumre3jzd27gw9jjl8zqmemg23",
    "addr1qxmgww3pjvtyn8tunqjw4cjtzvmekz77w4kcnlp58jfjd5hl43gkvjqmkap89s2gwzdyaxdny0xurnj45rw8dmvmvvnst7nncw",
    "addr1qx8uxd42nw04m0as8q5m54ks4mzyrxwzc594pyyjchx4phskdgdxqv7fjkjsukdqf6yhmkvhte2p97zs6t2wut4kmmpqh07a0h",
    "addr1qym9rx77npken66a56scj06eugwln7dk6276slspmfj8fyr90fuc3s5kkmugy33v5rx8hepaew00wgna67ddw2pkrs6s53cnud",
  ]);
  const treasury = Number(treasuryRaw) / 10_000;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default cnctFetcher;
