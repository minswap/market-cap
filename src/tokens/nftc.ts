import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NFTC = "b0af30edf2c7f11465853821137e0a6ebc395cab71ee39c24127ffb44e465443";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 10_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, NFTC, [
    "stake1uxvujg8rmtyr94wt6u0mn2yzvqwd5m0vg3t6rfe9zacp5lsurk408", // 12.4M   NFTC Drip
    "stake1uykz753y0jx3fjhcnplltwncw07h5repj2lhw8wzq6ctelglhevnc", // 11M     Faucet
    "stake1u83wpvg0gq76qsww7v0ct7qvu09yf9w8pkht9fwvlna6qjgm32732", // 2.69 B  Reserve
    "stake1u8q5zzjlw660awfk9ka62fsy5esngpej3dsp2qlcmjzjhwgnq5weg", // 2.5 B   SUPPLY
    "stake1u828c3c2kvswe7asfcct8zervwfshx4s30y9mqsfdlk9cmsd9ddkl", // 1.77 B  Funnel back to dapps
    "stake1u9t5x4k3selfsas5c9p9w0z5pggw37mna9umaxq5t2ssedc9xv9ak", // 1.4 B   LP Funds
    "stake1u9f9v0z5zzlldgx58n8tklphu8mf7h4jvp2j2gddluemnssjfnkzz", // 90.89M - MINSWAP
    "stake1u9uekhsgm69hvk6d0q79gawhcyaxy5p7ryq363mrpjzr83q948gaf", // 53.50M - VYFI
    "stake1ux9f4e03lvna7l2lpycgssy7chnrmc06ufvskk5szrxmfqq78z5ch", // 32.70M - OUR LIQUIDITY POOL
    "stake1ux7k5ztvhwj7ykv5v7vwjjzq8ckjk0v74z9p9m5w0t55f9clf62eq", // 17.82M - MINSWAP FARM.
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
