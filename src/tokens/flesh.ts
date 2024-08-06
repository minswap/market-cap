import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const FLESH =
  "a1ce0414d79b040f986f3bcd187a7563fd26662390dece6b12262b52464c45534820544f4b454e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 420_000_000_000_000_000;
  const treasury_team_and_distributorsRaw = await getAmountInAddresses(
    blockFrost,
    FLESH,
    [
      "addr1qx7454h55m7mddcqfjm36fm7nmy8n09360w3mqgn8ucsqc6676h2cefplfw3ja5fy3903a4xpaletxqk0pmt2ykwym7sp0un3u", // community wallet
      "addr1qxpeczj2lluh88sa2g3tm0e3fj39c34rlctmvcszjs67g6wjj9djsz0020h68nz3rxknzdh93nryqzhq6h9z0nnzf0rshrectt", // tosidrop distribution
      "addr1w858jt2qn8c7zaw4fdpccpeejwjsd38guu9kx3qmchg2k0cymsdmg", // dripdropz distribution
      "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // minswap farm distribution
    ]
  );

  const burnRaw = await getAmountInAddresses(blockFrost, FLESH, [
    "addr1w8t6qhfx7cty7pg805adz62gjfkld0c70usezv4e4uxfk0sf0e2mj", // burn wallet
  ]);

  const uncirculated = Number(treasury_team_and_distributorsRaw) / 1e1;
  const burn = Number(burnRaw) / 1e1;
  return {
    circulating: (total - uncirculated - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
