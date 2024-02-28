import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BANK = "2b28c81dbba6d67e4b5a997c6be1212cba9d60d33f82444ab8b1f21842414e4b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2.5e12;
  const treasuryRaw = await getAmountInAddresses(blockFrost, BANK, [
    "stake1uxq7mehxxywwzf0cczf7tq4surcphjdd53ngw5ev6qxf7hstnt9qf", // $bankercoinada
    "addr1v9csf66n345hu6gua6uj4q59eq6a40fsm2kj08yg348k4fs2z0jeu", // Bank Staking Dashboard
    "addr1qyqajz9679h6jlzfgn8u3ct7dch3u7wdcjx8f4ysreuzd9nadwf2dysvmd0069sl3p73nvucp4wkvd06ry8g4p8f762qm96ee2", // Team
    "addr1qxag9x49vtazage2lf6zgx98kkvdx92epppfj8g4fc4kxn5qvlajnzcseh89c5ce9wta9nuzern8tarn23a7v80ctudsvpau9k", // Bank PFP Staking
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, BANK, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // $bankercoinburn
  ]);
  
  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
