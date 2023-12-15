import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CGI = "2d587111358801114f04df83dc0015de0a740b462b75cce5170fc935434749";
const TREASURY_ADDRESSES = [
  "addr1qymnn4wqapf953jz830fhn3znyx7faa9d7ypdw73srcha0lq702x7mjld3hwc7nuqh54ym8x7mjyt6y2wk7w3r5t359q6ndl9t", // airdrop & rewards
  "addr1q8c95ftfwzdwnq2mksqrv0kqzdq0g20kfe8dfcuql88q8z53u7s2nr2gumwzevnwvpym5tnu0ngdznqmameqacpwx9mqyajfj3", // reserve
  "addr1qx9yd09e3yhuqtxlut3fstzqvwh0jrtppuxp3dfwmyp0a3t5wdcuf906xtpk0j8gkdrqhz53l4mtgqpyhgpygfgksusqmgc7w8", // marketing
  "addr1qymf4kszykp7y52q83fyxhp5e6kxdvqthzvur60wm45xafmmpgepw23huddd6vca8vmhde0vgrcx8p9p39370fx6mz4smmpwc3", // R&D
  "addr1qxc3h7jf80t37va0qwhka93vc7nz5j38k39nfzgj9mvfwxs33c0naryq932l840uz0zwdtxs09y86gucfljva84l7k0szpqdh8", // team & partnerships
  "addr1qxfrkchfzp49gurm2wgkww4jfm83u5jwk9uc2hs5lpx7y4t89dn2kukqy676lyr87myqllk7vm9s6e37ggwns420fmzqfzmt3m", // farming
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 5e6; // 5 million
  const treasury =
    Number(await getAmountInAddresses(blockFrost, CGI, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
