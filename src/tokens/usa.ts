import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const USA = "b9ae7e3566ad889aae93f500746869e7b3c71480329acd0a9bc01652555341";

const TREASURY_VAULT = [
  "addr1qxzlnzupsj47z2adgkd25rd8mq2aygr8wtdxchxnv0k5x3an2puwhfn097ytnk6du50dp27mh570um832ek48gk4dzjsmx60ct ", // Treasury
  "addr1v858vfzl7hdqduqqa4vsj58nfy9njtw5q98q8tzzds58uncqjezd7", // Casino
];

const FUTURE_BURN_ADDRESSES = [
  "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //To be burnt
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9; // 1,000,000,000
  const treasury = Number(await getAmountInAddresses(blockFrost, USA, TREASURY_VAULT));
  const burnt = Number(await getAmountInAddresses(blockFrost, USA, FUTURE_BURN_ADDRESSES));
  return {
    circulating: (total - treasury).toString(),
    total: (total - burnt).toString(),
  };
};

export default fetcher;
