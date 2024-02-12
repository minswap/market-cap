import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getMaestroClient } from "../utils";

const LOUEY = "ac11a1a07f04ec9efee4c46c359725922377ec5a4596bbed670cc920";
const TREASURY_ADDRESSES = [
  "addr1qy6raw2ndg60u68g0rd079a84qh4y6625gysvzukc6r7u39247zav5n3h2vcpp2sktqxsaa8v44jypar3vk24gjs2jgqsy8hcv", // team
  "addr1q9esm0mhkhdjk8z83lcur4gwldygyedk8fxmhzldd7lp304kn0xh732vdqjwem8g3vzjhwh9s9fgteu4wnhmncw3j9nsmr4gl5", // marketing
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const total = 100000000; // 100 million
  const treasury =
    Number(await getAmountInAddresses(maestro, LOUEY, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
