import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ASHIB =
  "afc910d7a306d20c12903979d4935ae4307241d03245743548e767834153484942";
const TREASURY_ADDRESSES = [
  "addr1qxpv50tpyy9xutrzd3585eup87wm0qv3zyw4jfawqzchgyfltcw74v5edmr2veq0dvu4262jhendzee24ellgcamlqzsfzzfsq", // treasury 1
  "addr1q8dhkxncaznxd66tq5npvuqxl87zdw0glpazysxckl9gxfecnrdy6frmvrk2szfx2wsg9wa3z3wzctfmgaw7hcts7g6quzkakx", // treasury 2
  "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxz2j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq0xmsha", // treasury 3
  "addr1q8my0y2n7ythvevuyfur4w4akrc6mp454p2yp4pkjcrlwq2zhw8y7c92vew3fqwy7u4yrq66d2yt8wmd0tm3uyhsxaps59yy9y", // treasury 4
  "addr1qxrlzwkmv826sps9sfjdg3cr8malcr2wmfvhvt0sqpd84xaq4rezcdmnr9f52x0zsgpz3zl8klrwjhmynksx5lhs5scsdqcx9d", // treasury 5
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
