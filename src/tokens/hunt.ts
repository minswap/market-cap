import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const HUNT = "95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, HUNT, [
    "stake1uxdgnz5awy9ntz82xscxs62dgwtnjhwwchr5lrfcwlzyl6qtke3pl", // $dexhunter.team
    "stake1uxapatrmk76xuu5xh780men8ndym9kgq9ktdk6v6h8as2mcu65pka", // $dexhunter.trade
    "stake1u9jtef02ge2d290qu86szjwnz2gx9aypw7hwdwpm3kjevqc234y2z", // $dexhunter.rwrds
    "stake1uyqtfsvt7ky3zhullz2rqewu3pz8ksga5g3nd3vj293hpgcvuezsq", // $dexhunter.mrkt
  ]);

  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: (total).toString(),
  };
};

export default fetcher;
