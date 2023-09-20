import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MYIELD =
  "8f9c32977d2bacb87836b64f7811e99734c6368373958da20172afba4d5949454c44";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, MYIELD, [
    "stake1ux2veurnjdppn4x6tvulrj6jthqk54asu3yehcs427xztzsjhs5d8", // treasury
    "addr1vxg4dazeyyzc40g26ty22uyz5nrnax4gmyfj8m87xl44wvsw3pyfp", // transformer
    "addr1v9fcrvald5nsm3dc63lcchrra2xckmq9stt0pwkeshd4c5gvwax06", // rewards
    "addr1vxfa8dwzflct4re7qn2ls7t46w6rc479rafnwzqx4z2asuq6cg00t", // rewards
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
