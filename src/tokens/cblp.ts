import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CBLP = "ee0633e757fdd1423220f43688c74678abde1cead7ce265ba8a24fcd43424c50";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CBLP, [
    "stake1u80gm88pyu78rr2ee3p7mn482xza6thtnvg3k3c0y43syrsdzm0lw", // $yam_treasury
    "stake1uy02585lgl0j9pfzz2jxqmdckar2jqlpwre899j9304l3ysezxnjj", // $yam_community
    "stake1uxxghepgwfmtq9spaxf46ucxvns54pyvcqtrpk4888dtqdqhth0sj", // $yam_misc
    "stake1u9u5xdu6dxtqkq87rfpls54xp3jw6yqtvaywfzjzyejh65qtjjah2", // $yam_team
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
