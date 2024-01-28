import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHARLY =
  "89267e9a35153a419e1b8ffa23e511ac39ea4e3b00452e9d500f2982436176616c6965724b696e67436861726c6573";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 777_777_777_777;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CHARLY, [
    "addr1qyzaa27uuyxfwrqzlz8jmgtm4r7yve5hn9nggt9una63e6eqtwap4qgyz64kp3mwdqukkg3h989cy6js75pd5v6wmynsekglu3", // Adalot_vend
    "addr1qx9xpwhecsukyjs0ztdf5f6ng5sq5pxepjckeanf3yyac9h4p6zqcdkjfgpt34988p3aje2q64q7kh49492p7rqsu7yqdrcn2g", // Adalot_give
    "stake1u8ffzkegp8h48mare3g3ntf3xmjce3jqptsdtj38ee3yh3c9t4uum", // Tosidrop
    "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // Minswap_farm
    "addr1vysfrd9nkmh7u57xg66puszpdw899q4ymf786evge06na3qg4e20s", // Cardano_Lands
    "addr1wyv79rvp7j8hul6xrh3u5vlcxy0h7gun4tmq3l4e2g3j43sgv5eqq", // Dripdropz
    "stake1u8zu44gstz27rjwryce03tg3u0mhzk05xu0tzae8dc23t5gspps5d", // ADAYield
    "addr1v8vx2fyt2vlses0s5n03kckfnsmvc72pwgkq5dgnnkx78ug4cgwak", // Tekmirio
    "addr1qxq9k3hku6s9mn74cfn485v5p8sxjuwqxs6mvwear4kerfja204vsnpyn436tj4kg2h3vl8flpaszl4a0lhgrq33533qf8qxc6", // Cetf_pool5
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
