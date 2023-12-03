import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NEBULA =
  "3744d5e39333c384505214958c4ed66591a052778512e56caf420f624e4542554c41";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, NEBULA, [
    "stake1uy9zagwzs8hu9zur7xn6aftjwjpvs3cw65jywdh8jvpa5ggvvlr08",
    "stake1uxdzjx0temfw7qgfgcmm93azywa46ralpcfd6ulsal7jvggjrk6ew",
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, NEBULA, [
    "stake1u8u3tq66p2vg2y2zysmgtn7wqep3tffzxgu994g7mh6c84skgl0g7",
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);

  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
