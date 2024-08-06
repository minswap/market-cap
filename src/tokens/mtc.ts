import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MTC = "f6ac48c64aa7af16434d9f84e014d11fba38525b436acc338ff20b0d4d7463";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000;
  const treasury_team_and_distributorsRaw = await getAmountInAddresses(
    blockFrost,
    MTC,
    [
      "addr1q8yll2vw2h2dhv7fccdxwfm95puje3zelredzmw97w34hdwm9dndrhqfvas9nvg7rgn8wrwnzxsj7wp2msuthuvfuwsq9e905k", // team 1
      "addr1q9hsauvnf9dt88skshp76t45hp27c9p6y9rv6au74s43uqjx7gax6jgkwyn7vhvqet6n05quma2y5wdghj5arlzmmjpq2xyg4t", // team 2
      "addr1qx42lkkh8qhnetve4cmx74mzqx4qkssxz9ltmsn8nmgcxxs6gw4tkslgkhp8m2pgkedxlhtx7e8k5dj5xn7yt88p54kq69nh0h", // team 3
      "addr1wxqg5vgp3fsh6ddmr0vhc5xuhrckhyav9emdtwpfmafaf5q63x6rc", // dripdropz distribution
      "addr1qx3wvec7uhweerzqaeezzepmrwft8sfpucgk50tsuluz8f8cfhlykwhxy66aazkjmfp4euf0yhpeezx3exncm7e69pvs7jetw6", // starcada distribution
    ]
  );

  const burnRaw = await getAmountInAddresses(blockFrost, MTC, [
    "addr1w8qvvu0m5jpkgxn3hwfd829hc5kfp0cuq83tsvgk44752dsea0svn", // burn wallet
  ]);

  const uncirculated = Number(treasury_team_and_distributorsRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - uncirculated - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
