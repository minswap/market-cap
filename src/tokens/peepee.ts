import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TOKEN = "07ccfad78099fef727bfc64de1cf2e684c0872aab3c3bb3bed5e1081";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 3_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, TOKEN, [
    "stake1uxr3vlnzt085c0nyyv4yl7v2zcdewv02x4gslxmdc4cys3scy64vu", // royalties
    "stake1799ryumz9g7a6xg8n899lt5g49ru9ccv5v0hhm6856ju54qauwms3", // team
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, TOKEN, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
