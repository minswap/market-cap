import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const AWOO = "09f5f55fcad17503e6b7acc81de7c80f84b76e76d17085f0e32f1ce241574f4f";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 69_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, AWOO, [
    "stake1uy2s0etue4vgt6gz66t84zzgf8r6fgggc0prf4hsay3rvfcam00kg", // $unbothered
    "stake1uxh23dnmd2lzvxqr06vvuxtsgh4l4dxnrrcvj2fx6f53rkc70lmqh", // $uwstaking
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, AWOO, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnawoo
  ]);

  const treasury = Number(treasuryRaw) / 1e6;
  const burn = Number(burnRaw) / 1e6;
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
