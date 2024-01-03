import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MTC = "f6ac48c64aa7af16434d9f84e014d11fba38525b436acc338ff20b0d4d7463";
const TEAM_ADDRESSES = [
  "addr1qxw6ltkkfapk934cfhj8aswpv6pj9ejlqtuszcr3vp3nkcyl4z8jmxwk2u8knrqgptuc3f56hqxenmp45qscmeyxg0xs96x9qy", // team 1
  "addr1qy567alv55pznmx8newdj77tghetevq2jr39t5uz7vrk208l95lxy69yvjzpx79wu6lsrq54as3ynftrg0t0ecyfd59sl5xcxv", // team 2
  "addr1qx5705wkfz897qul8cck2w2ke4uxshal8ghu0m3tncy0sasq9sp8s22znmvqlmka7g20jckxyazqhjehg5q6h3ek0shs9cslz8", // team 3
  "addr1qypnftnwqqghlv0t4n7tj4xynuvj635szue4lw0jh5nhwxkcsc7tl298q66tcrjumsqp8cmm4gaa2rh7dq5p6l0jj3jstvvp03", // team 4
  "addr1q8s602mue5ecqk53yj2xa6whk3kqyadtsgm74xp8938fkwzg5vcd98mzm8sf0a2dn80nwt2k98zjpj47yhde5vtz6tqsq65km9", // team 5
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e6; // 1 million
  const treasury = Number(
    await getAmountInAddresses(blockFrost, MTC, TEAM_ADDRESSES)
  );
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
