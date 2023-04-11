import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CLAY = "38ad9dc3aec6a2f38e220142b9aa6ade63ebe71f65e7cc2b7d8a8535434c4159";
const TREASURY_ADDRESSES = [
  "addr1q98wxe2xdwj4agd0cx34pmecfg2s2944mmnyqat2wtf8jxulcgstlsmaaeu0eu40g54rpv3d9n6crxc7vrpjv2f3vfpqrzd0vy", //treasury 1
  "addr1qy6rekt5zw7s08q5kvdcw7l8a3npv60sjpk7c2xqjgg23fdsq7gk94dsvmc8razsutevx54rgs3dfza759mmt5m2pppq8wlgdp", //treasury 2
  "addr1z8tlml0x8spf2qyzse7qwh0hh4qp50fhx6m2kmr3wsvez340fm4l4jflstl7hz7ucs5793gzr297g67psdx8dssdf68ssh59m2", //baking
  "addr1z9uxzlm9zf98kgf27sslzyl2d0j50ssdxlh6du2jt5r7vma0fm4l4jflstl7hz7ucs5793gzr297g67psdx8dssdf68sguhkf9", //staking
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const total = 2.5e9; // 2.5 billion
  const blockFrost = getBlockFrostInstance(options);
  const treasury =
    Number(await getAmountInAddresses(blockFrost, CLAY, TREASURY_ADDRESSES)) /
    1e4;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
