import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MTC = "f6ac48c64aa7af16434d9f84e014d11fba38525b436acc338ff20b0d4d7463";
const TEAM_ADDRESSES = [
  "addr1qxw6ltkkfapk934cfhj8aswpv6pj9ejlqtuszcr3vp3nkcyl4z8jmxwk2u8knrqgptuc3f56hqxenmp45qscmeyxg0xs96x9qy", // team 1
  "addr1qy567alv55pznmx8newdj77tghetevq2jr39t5uz7vrk208l95lxy69yvjzpx79wu6lsrq54as3ynftrg0t0ecyfd59sl5xcxv", // team 2
  "addr1qx5705wkfz897qul8cck2w2ke4uxshal8ghu0m3tncy0sasq9sp8s22znmvqlmka7g20jckxyazqhjehg5q6h3ek0shs9cslz8", // team 3
  "addr1qx42lkkh8qhnetve4cmx74mzqx4qkssxz9ltmsn8nmgcxxs6gw4tkslgkhp8m2pgkedxlhtx7e8k5dj5xn7yt88p54kq69nh0h", // team 4
  "addr1q8yll2vw2h2dhv7fccdxwfm95puje3zelredzmw97w34hdwm9dndrhqfvas9nvg7rgn8wrwnzxsj7wp2msuthuvfuwsq9e905k", // snek staked
  "addr1wxqg5vgp3fsh6ddmr0vhc5xuhrckhyav9emdtwpfmafaf5q63x6rc", //dripdropz bucket
  "addr1qx3wvec7uhweerzqaeezzepmrwft8sfpucgk50tsuluz8f8cfhlykwhxy66aazkjmfp4euf0yhpeezx3exncm7e69pvs7jetw6", //starcada distribution
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
