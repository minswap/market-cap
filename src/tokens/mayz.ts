import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MAYZ = "9e975c76508686eb2d57985dbaea7e3843767a31b4dcf4e99e5646834d41595a";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 1e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, MAYZ, [
    "stake1u8yrsk8fn672hr0xhtzslppvnl5jfdgpggn0862yq903u0c7w7e06",
    "stake1u9pj8cpxn8xpxk9qlpwsuv08w3mr8pky4r6e7xkwfh20zcqx8dahf",
    "stake1uy2pglk3g4lqwnu2d5qwvpkf85zl94eq3s20zgqtxy0n9kqmts464",
    "stake1u9eyhfzur7lvgmgmeky0gzqsq80jvu0n9qfqeydff802adsr8sjkn",
    "stake1u83dyusvcs4ju9tqts8q20x3k7zakm5tk32pr3t32e09dqg9s2jqw",
    "stake1u9gum7a7eanxdh0zmuaytt66xdfz63qshw584mn3xq0j80csu4k48",
    "stake1uxhx6z2s9dpmss9e7ks0l065kmd22uwgjzdgl78ygwvl25gm9l8gm",
    "stake1u9j77ak55cwacf3snnnn04hk2uuddf0jr8j3vm4q5t2nu3c208n7f",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
