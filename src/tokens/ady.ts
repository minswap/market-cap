import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const ADY =
  "438514ae1beb020d35e5389993447cea29637d6272c918017988ef364164615969656c64";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, ADY, [
    "addr1qyrgyf7n3whtc7v07lfnrlzzgjywenvdx5n4ugfqsyzudyse8qjesjluhd7nkmauw9tu4tjw5m6j840af7pzmp60hf8qmc4gke", // marketing
    "addr1q87nf2vx2s6ur8jek6slprf4m65e39cmxjetz5g42zjj84jrdhxhfhtypyc3zjx6r32c8vq2xv34mlvuaddrnc8shghsy50thl", // rewards
    "addr1qy8vlnj0mglq79mlr5fx096qea6r7qrsu6rt3wqvhl678rl05jpfehp48d28ravv7qe7zh4hnur8qktff5qa4t6dhg7svrlax9", // liquidity
    "addr1qxpeczj2lluh88sa2g3tm0e3fj39c34rlctmvcszjs67g6wjj9djsz0020h68nz3rxknzdh93nryqzhq6h9z0nnzf0rshrectt", // tosidrop distribution
    "addr1w9jkhngsyq2nl09r59m95r903mn40wfpcze7psqvxjzxragmnuddk", // dripdropz distribution
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, ADY, [
    "addr1w8t6qhfx7cty7pg805adz62gjfkld0c70usezv4e4uxfk0sf0e2mj", // burn wallet
  ]);

  const treasury = Number(treasuryRaw) / 1e7;
  const burn = Number(burnRaw) / 1e7;
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
