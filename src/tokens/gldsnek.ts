import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const gldsnek =
  "cdbbe391853676285131fe2de250e274dbeb5f9d98344e86c7b383d9474c44534e454b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 78_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, gldsnek, [
    "addr1q8uu7utay9dfjyxqrdqmal3nn6g2q0x6zcg906cxdyl0z005f4expj22ee6clpveucn5r8qsxvc96pm2266re27y0gss6nrg7z", // Team
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, gldsnek, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // burn address
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
