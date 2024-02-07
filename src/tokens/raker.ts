import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const RAKER =
  "ace2ea0fe142a3687acf86f55bcded860a920864163ee0d3dda8b60252414b4552";
const TREASURY_ADDRESSES = [
  "addr1q8djvsvq45pff7vmyvqdujpudkwpzr3cdejqsxg5r6qg60utvn6keknqc0ea3rs3c96naytguxq3pspqn5fkjltmr95srtewf6", // main wallet
  "addr1qydps9yp6c2fs390hqh5fhwzy080xxs3lwndp3jx02yhned6j6fv80mjxvap57s2nvgndrthk27kjc0qw92hfswcv0xqrcelcu", // ops wallet
  "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // minswap wallet
  "addr1z8snz7c4974vzdpxu65ruphl3zjdvtxw8strf2c2tmqnxz2j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq0xmsha", // liquidity wallet
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 10_614_254; // 10,614,254 million
  const treasury = Number(
    await getAmountInAddresses(blockFrost, RAKER, TREASURY_ADDRESSES)
  );
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
