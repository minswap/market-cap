import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BUBBLE =
  "4fde92c2f6dbcfa2879b44f7453872b31394cfb2f70f1d4c411169ac427562626c65";
const TEAM_AND_DISTRIBUTORS = [
  "addr1qx42lkkh8qhnetve4cmx74mzqx4qkssxz9ltmsn8nmgcxxs6gw4tkslgkhp8m2pgkedxlhtx7e8k5dj5xn7yt88p54kq69nh0h", // team 1
  "addr1qxzngvw7el7kj9j0egldcmgeygjh93vy8s0q7llerp0kan6zhw8y7c92vew3fqwy7u4yrq66d2yt8wmd0tm3uyhsxapsxl5pm3", // team 2
  "addr1q92ur5xeg5tv0xm9mkpsevcd8vvczjgkqc3n3tc9e0tgzdnexu7umnn2eu26y0mqcrty2zrhsfx3kq4je0hpqskm2desyce9tu", // team 3
  "addr1wy0uq9nh5h22qxje9ck9hs5srnagduf9ylhnmrcdm0mhx0gch2l65", // dripdropz distribution
  "addr1qxpeczj2lluh88sa2g3tm0e3fj39c34rlctmvcszjs67g6wjj9djsz0020h68nz3rxknzdh93nryqzhq6h9z0nnzf0rshrectt", // tosidrop distribution
  "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // minswap farm distribution
  "addr1qx3wvec7uhweerzqaeezzepmrwft8sfpucgk50tsuluz8f8cfhlykwhxy66aazkjmfp4euf0yhpeezx3exncm7e69pvs7jetw6", // starcada distribution
  "addr1qxt9njtjx52l37rrx8ceugaxedwer2737wnldyrk32y4wqkj3as3w0lcznwjlhzrqrvg720mzq8yz5x8va3gdyc0uxwslyyxf9", // adalot exchange vending
  "addr1q8ctlczt8fqjntg3g2g3cpf697g72l2dl4m5ta978gtddp2gjv5xxe2nftrkfd0d3q3dwfc34j2fmrxlm5jw5ge3e6yq56j4ga", // adalot jackpot vending
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100e6; // 100 million
  const treasury =
    Number(
      await getAmountInAddresses(blockFrost, BUBBLE, TEAM_AND_DISTRIBUTORS)
    ) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
