import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NMKR = "5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc928434894e4d4b52";


const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
const blockFrost = getBlockFrostInstance(options);
const total = Number(10_000_000_000);
const treasury = await getAmountInAddresses(blockFrost, NMKR, [
  "addr1q9j2atke2qg7ljjm795u2mf4wf4f2uk35f5t7984t62kqtxh7t5nw0qtt7g322gtayqrr7zmpvdrf24kc284uwmhqgas34y7tg",
]);
return {
  circulating: (total - treasury).toString(),
  total: total.toString(),
};
};

export default fetcher;
