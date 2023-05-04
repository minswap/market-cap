import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NEWM = "682fe60c9918842b3323c43b5144bc3d52a23bd2fb81345560d73f634e45574d";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 9_735_033_900;
  const treasuryRaw = await getAmountInAddresses(blockFrost, NEWM, [
    "stake1u8kt3m25a5nycushdc7rl7jm8wmll23nadxc8rpzwx7vq8s3j8jf8", // NEWM foundation
    "stake1ux0vqjvjccqvk8a43jwa5nd2aqzt4ekdjarvnqmt9629pzcty2qcs", // BeatHaven
    "stake1u8n0tlf4f2kktz7k3kr0g7sdn98stmsmm42kw7xcue2smycv766hh", // NEWM LLC
    "addr1wxkajet4zhhuylr6475ykqerll0gl8x8v8kgmnrpxt2vrwq2eh67y", // ISPO (via DropDropz)
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
