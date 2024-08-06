import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SCALE = "1f01188ffed79a9296d824c49eec851c21ea860e7c4f88324de50f2c7363616c65";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 40_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SCALE, [
    "stake1u8mceu7uqd943my6k3mmja9j7rm5kjg7ezgnzwcfqvranfsl0p2ku", // $scale.ipdholder
    "stake1uy9tsassdgfqpkdxmtusnd7r39z3j5sp2judhl7g449jltgr4kkx5", // $partner.market
    "stake1u86fxn5kx4s0qsh0zj4xkzs4xsrkl9pku3xjughdyhva86qhs4eem", // $scale.ispo.drip
    "stake1u8sm7tl8u0n6yc8vlzpds06cpqclen490tptxn223zaq20scvlgtj", // $scale.vaultfeed
    "stake1uykxdu30uduseadh5zwj43f88um8dr9y6renkf6e9mjerys84df64", // $scale.vesting
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SCALE, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn address
  ]);

  const treasury = Number(treasuryRaw) / 1e6;
  const burn = Number(burnRaw) / 1e6;
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
