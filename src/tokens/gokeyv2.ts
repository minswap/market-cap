import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const GOKEY =
  "ab0dec21aa7d939ad124ffaf95faf8ed72b1018ff72fffd8f9974907474f4b4559";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const assetInfo = await blockFrost.assetsById(GOKEY);
  const total = Number(assetInfo?.quantity) / 1e6;

  const treasuryRaw = await getAmountInAddresses(blockFrost, GOKEY, [
    "stake1uxectp3ej56dq8cmxz96h7g36xw5a4e0mlpyx9lm5rpqfgggdsfu8", // $gokey
    "stake1uye2d70tlf6vkg6chq3l7v50e25cw8w4he34ge2zymgntnqksny6w", // $gokeydao
    "stake1u8eu0cx5eqchx7hr4py0j0rnepx722klgwqpweardgqmx7cr230hu",
    "stake1u8xujuxpuj0wxjm2n6qqff9l4nrjgpfdjr3ffaj006s4wmckvk0wj", // $gokeyispo
    "stake1uyekd377dmet3vqyaawllvtz0xjjzxaq3k3ktl0g63zyrxch72pyc",
    "stake1u95ear6v2rkdkj2ul4zeet07m6rq33q8c6rk476u8l6fz3cng6mrt",
    "stake1u97dxtu3597x64mtkx47uz47vzfwr7tmktrkjweutd7xsggawhhnn"
  ]);
  const treasury = Number(treasuryRaw) / 1e6;

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
