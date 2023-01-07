import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const INDY = "533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 35_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, INDY, [
    "addr1wx8s22stu8gqayq2rzsqwwpxqm2wkzex9qmvx00q8yq26wgd4l539", // DAO Treasury 
    "addr1xynxx7cptxy247l6hp48e4mf40mc3mfpxhhjxyl5l4eh943xvdaszkvg4tal4wr20ntkn2lh3rkjzd00yvflfltnwttqgq0lfy", // Team allocation 
    "addr1xxzlrnh3rkedyut4az4frx3xs08cevskwcaz855yc2uhk9v97880z8dj6fcht692jxdzdq703jepva36y0fgfs4e0v2s4xauem", // Rewards Distribution
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
