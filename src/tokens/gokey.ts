import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const GOKEY =
  "c7dcfa416c127f630b263c7e0fe0564430cfa9c56bba43e1a37c6915474f4b4559";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 4_500_000_000n;

  const treasury = await getAmountInAddresses(blockFrost, GOKEY, [
    "addr1wyehg40jpn90q6dsy9njxk8aek4xzqhg2shjyagnu6jzmsgvh30fu", // DripDropz
    "stake1u8ffzkegp8h48mare3g3ntf3xmjce3jqptsdtj38ee3yh3c9t4uum", // TosiDrop
    "addr1w8yk5vaq6rq3jgn84xurqjgy030j937dfpuu6m5tmkmpukst7amql", // Vyfi Farm
    "addr1w8t7zc55cjc83lf7rhxam205vmf2arqttj37jpynuamjnxsk60vzs", // Vyfi Vault
    "stake1u9f9v0z5zzlldgx58n8tklphu8mf7h4jvp2j2gddluemnssjfnkzz", // Minswap Farm
    "addr1qyfpy8cqj4w9a7d44kg6hstqp5434f8m00hn4ymkgxgy2u4nskrrn9f56q03kvyt40u3r5vafmtjlh7zgvtlhgxzqjssq5hya9", // GoKey Community
    "addr1qxsg35syleg2ysd7evgfjr8n753q7a49mu3nufgvgek07cpj5mu7h7n5ev343wprlueglj4fsuwat0nr23j5yfk3xhxqncy8hg", // GoKey DAO Treasury
    "addr1qxmmh0g9cahu43zxdz27nav2e09y0mzfkevmxd9gv528lvhnclsdfjp3wdaw82zgly788jzdu54d7suqzan6x6spkdaste4q5t", // GoKey DEX Liquidity
    "addr1qxj5ay8gcadlr5xgg3vsv68nrkq6vu3neyt2yy7lse3k3wkde9cvrey7ud9k485qqjjtltx8yszjmy8zjnmy7l4p2ahsp3g4d5", // GoKey ISPO
    "addr1qxfhz6gy4rsd9pz3esn9mcgf6q3qkf3mkadqkdavpl4jkuenvmraumhjhzcqfm6al7cky7d9yyd6prdrvh7734zygxds06sf6e", // GoKey Partnerships
    "addr1q8f6gn0fkeum3ukurzet8c5l34mmsqnflfljt6t2fcuhpunfn685c58vmdy4el29njklah5xprzq0358dta4c0l5j9rsqcq5sx", // GoKey Public Sale
    "addr1q8q34p3pyrwlya5v5qrfahyxyh4nwrdtx74dptqhdv7dznmu6vhergtud4tkhvdtac9tucyju8uhhvk8dyanckmudqssg2axkg", // GoKey Team / Advisors
  ]);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
