import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BABYSNEK =
  "7507734918533b3b896241b4704f3d4ce805256b01da6fcede43043642616279534e454b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 76_715_880_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, BABYSNEK, [
    "stake1uy5fe64k5lv5nrsy0g322ywh5fnfwyxwcqvp0pej3ymee7cpuv7z4", // $babysnektoken
    "stake178mscmhst8zj35s9tvpj8926nmw9dj8vut4rhme9qwtpj2qm8f00a", // $babysnekdev
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
