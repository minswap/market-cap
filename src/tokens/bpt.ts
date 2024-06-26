import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BPT = "d42729a8559b38c5d13009d653e4086404234bdb535a97b945c6ea78425054";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 155_000_000_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, BPT, [
    "stake1uypqrgwhdktwdc0735wvtclvttu5nxp48fvq6mv742gmmhcjh0xu8", // Treasury
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, BPT, [
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
