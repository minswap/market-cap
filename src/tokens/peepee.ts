import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const PEEPEE = "07ccfad78099fef727bfc64de1cf2e684c0872aab3c3bb3bed5e1081";

const TREASURY_ADDRESSES = [
  "addr1xxs2jlspt4u48v22rzc3p7pr9mxcnd94c97jn2chrh38g3dq49lqzhte2wc55x93zruzxtkd3x6ttsta9x43w80zw3zsz886m9", // Treasury vault
];

const BURN_ADDRESSES = [
  "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // $snekburnwallet
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 3e9; // 3 billion
  const blockFrost = getBlockFrostInstance(options);
  const treasury = Number(
    await getAmountInAddresses(blockFrost, PEEPEE, TREASURY_ADDRESSES)
  );
  const burnt = Number(
    await getAmountInAddresses(blockFrost, PEEPEE, BURN_ADDRESSES)
  );
  return {
    circulating: (total - treasury - burnt).toString(),
    total: total.toString(),
  };
};

export default fetcher;
