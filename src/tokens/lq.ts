import { defaultFetcherOptions, SupplyFetcher } from "../types";
import {
  getAmountInAddresses,
  getBlockFrostInstance,
} from "../utils";

const LQ = "da8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 21_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, LQ, [
    "addr1q9qpk9suska6ugxcr76ek2l7u7d4twmugsppl3e7gkzsgu5pvftpwnj9wytn4h9e3kgdw60pwtffa6jqsll0jr5gjxnqrnmd24",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
