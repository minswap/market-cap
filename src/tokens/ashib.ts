import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ASHIB =
  "afc910d7a306d20c12903979d4935ae4307241d03245743548e767834153484942";
const TREASURY_ADDRESSES = [
  "addr1qxpv50tpyy9xutrzd3585eup87wm0qv3zyw4jfawqzchgyfltcw74v5edmr2veq0dvu4262jhendzee24ellgcamlqzsfzzfsq", // treasury 1
  "addr1q8dhkxncaznxd66tq5npvuqxl87zdw0glpazysxckl9gxfecnrdy6frmvrk2szfx2wsg9wa3z3wzctfmgaw7hcts7g6quzkakx", // treasury 2
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 109e9; // 109 billion
  const treasury =
    Number(await getAmountInAddresses(blockFrost, ASHIB, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
