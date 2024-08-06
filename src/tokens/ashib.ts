import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ASHIB =
  "afc910d7a306d20c12903979d4935ae4307241d03245743548e767834153484942";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000_000;
  const treasury_team_and_distributorsRaw = await getAmountInAddresses(
    blockFrost,
    ASHIB,
    [
      "addr1q9pyzv7p23c7sqsrd9y50pl9csefm5y9gs74t9zs7zqhxmlvevz8mzgjhfmjv87qdj45l7mfrfnv2v5dgr70uky86txqvfusqz", // community wallet
      "addr1qxrlzwkmv826sps9sfjdg3cr8malcr2wmfvhvt0sqpd84xaq4rezcdmnr9f52x0zsgpz3zl8klrwjhmynksx5lhs5scsdqcx9d", // team 1
      "addr1qy40nxgx8wk03xn0k0xega3l6fwrekwsyuuj7cyyhsz8fl2zhw8y7c92vew3fqwy7u4yrq66d2yt8wmd0tm3uyhsxapsy4t5ms", // team 2
      "addr1qxpeczj2lluh88sa2g3tm0e3fj39c34rlctmvcszjs67g6wjj9djsz0020h68nz3rxknzdh93nryqzhq6h9z0nnzf0rshrectt", // tosidrop distribution
      "addr1w9rerwzk0f5v4den9u2c7anv2d4dl88hq9cq0xgcmernsfsak7w6r", // dripdropz distribution
      "addr1qyjhg2ge6w6tzwc9gwmddp5ha07zsawpd3pse7v9a0893jufgx9ne2hurkmz7adclf0tpehwdqwuhfejtph98vpfhulscdnlzz", // adalot exchange vending
      "addr1q8xhjg9tn29a6vpv9e52xf8zn7hl7nqkv99kk4uac08myjud244wsz2v65xv0jc4tgjyfxrhgnmcav0upfcvcdv2d8qq7fqgh3", // adalot jackpot vending
      "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // minswap farm distribution
      "addr1qx3wvec7uhweerzqaeezzepmrwft8sfpucgk50tsuluz8f8cfhlykwhxy66aazkjmfp4euf0yhpeezx3exncm7e69pvs7jetw6", // starcada distribution
    ]
  );

  const burnRaw = await getAmountInAddresses(blockFrost, ASHIB, [
    "addr1w8qvvu0m5jpkgxn3hwfd829hc5kfp0cuq83tsvgk44752dsea0svn", // burn wallet
  ]);

  const uncirculated = Number(treasury_team_and_distributorsRaw) / 1e6;
  const burn = Number(burnRaw) / 1e6;
  return {
    circulating: (total - uncirculated - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
