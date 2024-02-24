import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHARLY =
  "89267e9a35153a419e1b8ffa23e511ac39ea4e3b00452e9d500f2982436176616c6965724b696e67436861726c6573";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 777_777_777_777;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CHARLY, [
    "addr1vxgts9tzm59h72uetsg48m3tj4z6h0gqz3m7pdm0gapwxxslqglt9", // Cardano_Lands2
    "addr1v9gs0trlcmyty7jakcewjs3h00a7xrzyd5wnyfrpeg4wjts0ugx63", // Charly_vend
    "addr1q9mwfll6mrhyapf50mkqhlttxffas3v5urhgsm4l448mhr4vvhmy90lh87378gmwx6jdr5xfgtuucx4dfchlh4nc0peqrxm5kx", // Foundation
    "addr1q98qvu8ka586kd94mlky4f9p6xeg0gk9xhqq0wmkmejgg9azpu4c9gyhkgec9uquscwqarmvzx5r80tjmzu9c666hrzqw35s5u", // treasury
    "addr1q9ey6270swkdzldp50tshtylv592nk2pryxzzz9ytwp8gtttn6kx9phg2r8l8sqkvlymq4wgetet5zm9ysut6eepgpwql8ulzx", // founder
    "stake1u94vpc75fv6mq4vcupew454mf97wygg54shprlnwy8f5r5spul7ju", // team_wallet_2
  ]);


  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: (total).toString(),
  };
};

export default fetcher;
