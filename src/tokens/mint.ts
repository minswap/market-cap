import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MINT = "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e74";
const TREASURY_ADDRESSES = [
  "addr1v9urht2tqg7ncs7r545qdj2wn5tpam5l04t7eyermpmyvmg5xf2mt", // FISO
  "addr1w9p9akyhpqsy0xq79g8hspy90xl9htxfrd3mama6py42jjgtvfgn8", // DripDropz
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000;
  const treasury =
    Number(await getAmountInAddresses(blockFrost, MINT, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
