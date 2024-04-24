import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NMKR = "5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc928434894e4d4b52";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = Number(10_000_000_000);
  const treasuryRaw = await getAmountInAddresses(blockFrost, NMKR, [
    "addr1q9j2atke2qg7ljjm795u2mf4wf4f2uk35f5t7984t62kqtxh7t5nw0qtt7g322gtayqrr7zmpvdrf24kc284uwmhqgas34y7tg",
    "addr1qx3qh43x9re55gue0drws079x3w4ke6gv6f6g5lke4gqtylptfpmf2xr4j3wz2ex4umqryvphvvd5wam0uhv52vkqrhqvq968f",
    "addr1q8yn82xu942cl8ufhr4mpd78ga7sflum3hzhy3rp80dr9z98j67nfwq0r8z5tarz5mv9mg00c0y20pjaucwhnh46layqp5qjt0",
    "addr1q92xvvh369cgq8cuwsn45909n7efcgspqe3ecyyng4nc8nfukcmcw2ua9murga6als0dkcfthm3ul8gsflpdsya0568qwdfude",
    "addr1q80p8glcgjp564ntquxwynrnsp5qejexnjj90zy6f0am7t2k7xqu7nc2pnutpm7968zjcscjccalfq4cgy56adt6pljqpsuras",
    "addr1qxn7ervc5au4flt9c6ww0rgukkwfhcxgzjxyjvxjzwx6zvg3p47letwa26eylt4mfa50zrx26f47acj00ukhjjee8q3svl2r9z",
    "addr1qx0tpkhl3pxntqm4txf63adktaazcdr25luesckzcvg4gdyz45p0u5k20h5ak3hs6y4q2lx6ypk69fy5rm2lvc9wvhkqu9yk3g",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
