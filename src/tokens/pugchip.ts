import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const PUGCHIP =
  "5ec2e9813fa385d9333d18186d8257d1b3ebea97bdec2dad74026d8d50554743484950";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 50_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, PUGCHIP, [
    "stake1ux9pxk2vq624c5fvssym04pz7c9gt8wxr09kpm52w9zsycg840u8j", // $01011981
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, PUGCHIP, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$spacepugsburn
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
