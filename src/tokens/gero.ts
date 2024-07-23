import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const gero = "10a49b996e2402269af553a8a96fb8eb90d79e9eca79e2b4223057b64745524f";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 500_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, gero, [
    "addr1q9ztglqsxh2z9axvqdxa3zx3d6jwshwpweyxfjqtkz4t74elsevp82m7t3ztwknpeusr9wagtmwmvx5p3qa0v5l47yhqvfadex", //team 
    "addr1qxh9m2x8gvu9jauh0uz0ad05jvrhx93avy3fa7yfujjtc9d70s467j6ahztju3pltp79zyk0z9ujlja44cjusjd3pckqze4zka", //advisor
    "addr1qy0gugg7y6g2rkhmupaa4z837spqnf42x6ejgm3gur3uvqhgv6le9ntys7rtmm43ksp9e60uje6thlrgrx87wr4up2msgh0693", //ecosystem and rewards
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
