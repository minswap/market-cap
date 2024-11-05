import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NOEL = "b17b04ec0b8fa48613d7c80bc09a810e8bc8297cbbb6e9f4949fd8424e4f454c";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 5_310_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, NOEL, [
    "addr1v94yd0rgueuum6964du46xcnp4qr3kzpsxjwpx8avqcnpkcdm8dru",
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
