import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SPLASH = "ececc92aeaaac1f5b665f567b01baec8bc2771804b4c21716a87a4e353504c415348";
const TREASURY_ADDRESSES = [
  "addr1x96ug4cwkcj6azqmx235c543t8m08uljc742had6c35gzvllzldzmfztwhxahljux7gq8v85j75a9rwhnq4emqvg3uhs8qh80w", // Temporal inflation vault
  "addr1q96p2l077gtj4cpn6md5lfwa39gqzkjum2hyvyrzfgmmk644xkv048skchrn36ekysu82z3rdk0m5xgysms6aj67ekfqy0eh3v", // Minting address
  "addr1w8jxjly04tdcm8dvhuev4tvfrr9xtuquylf9f4679nnlkws3vwhzn", // Team vesting contract address
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e8;
  const treasury = Number(await getAmountInAddresses(blockFrost, SPLASH, TREASURY_ADDRESSES)) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
