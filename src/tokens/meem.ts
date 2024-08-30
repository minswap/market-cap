import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MEEM = "05c4bcecccff054c9aefff8bdc310e1edb8baa0756d912b47ae45d694d65656d";

const TREASURY_VAULT = [
  "addr1vynhwueahpm94x4vdktyenjn9p652rw42v3kh85ghhzgl5cw8jskd", // Faucet
  "addr1v858vfzl7hdqduqqa4vsj58nfy9njtw5q98q8tzzds58uncqjezd7", // Casino
];

const FUTURE_BURN_ADDRESSES = [
  "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //To be burnt
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 69e6; // 69,000,000
  const treasury = Number(
    await getAmountInAddresses(blockFrost, MEEM, TREASURY_VAULT)
  );
  const burnt = Number(
    await getAmountInAddresses(blockFrost, MEEM, FUTURE_BURN_ADDRESSES)
  );
  return {
    circulating: (total - treasury).toString(),
    total: (total - burnt).toString(),
  };
};

export default fetcher;
