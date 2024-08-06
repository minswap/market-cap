import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHARLY =
  "89267e9a35153a419e1b8ffa23e511ac39ea4e3b00452e9d500f2982436176616c6965724b696e67436861726c6573";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 777_777_777_777;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CHARLY, [
    "addr1vxgts9tzm59h72uetsg48m3tj4z6h0gqz3m7pdm0gapwxxslqglt9", // Cardano_Lands
    "addr1v9gs0trlcmyty7jakcewjs3h00a7xrzyd5wnyfrpeg4wjts0ugx63", // Charly_bowl
    "stake1uxkxtajzhlmnlglr5dhrdfx36ry597wvr2k5utlm6eu8susrny2uj", // $king-foundation
    "stake1ux3q72uz5ztmyvuz7qwgv8qw3akpr2pnh4ed3wzudddt33qh67tzj", // $charly-treasury
    "stake1u94eatrzsm59pnlncqtx0jds2hyv4u46pdjjgw9avus5qhq5p08fc", // $charlyfounders
    "stake1u94vpc75fv6mq4vcupew454mf97wygg54shprlnwy8f5r5spul7ju", // $charlytoken
  ]);

  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
