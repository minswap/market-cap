import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

// Total supply of any token launched on snek.fun
const SNEKFUN_TOTAL_SUPPLY_DEFAULT = 1e9;

// The base16-encoded policyId + base16-encoded assetName
const TOKEN_SUBJECT = "766fce8055f39d40fcfc19721677b3deb2e7846950ae08dce757f1e753554741522042555348";

// Not counted in the supply
const BURN_SNEK_ADDR = "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const burnsnekAmount = Number(await getAmountInAddresses(blockFrost, TOKEN_SUBJECT, [BURN_SNEK_ADDR]));
  return {
    circulating: (SNEKFUN_TOTAL_SUPPLY_DEFAULT - burnsnekAmount).toString(),
    total: SNEKFUN_TOTAL_SUPPLY_DEFAULT.toString(),
  };
};

export default fetcher;
