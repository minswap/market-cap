import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const YUMMI =
  "078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec92479756d6d69";
const YUMMI_POLICY_ID =
  "078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec924";
const STAKING_ADDRESS =
  "addr1wydpsqf5zz9ddy76d3f3jrrf6jkpyjr48nx5a706w9y68ucy4wu6s";
const MIN_ADDRESS =
  "addr1v88anmxf0wh2uhck5cnltuft8x3k5pclc8e4mpdr8ju23mcjjd05d";
const MIN_MASTERCHEF_ADDRESS =
  "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr";
const SUNDAE_ADDRESS =
  "addr1vxdsefaj7n3hh6ztnpc4myfvcz7udrfexv5yf9ztkd06kksjv2ht8";
const DRIPDROP_ADDRESS =
  "addr1w9zsdakg8mwjeclyzlycn62t4nuvwx6a5ggytcghdn7cvugz5kz5u";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const circulating = Number(
    await blockFrost
      .assetsPolicyById(YUMMI_POLICY_ID)
      .then((resp) => resp[0].quantity)
  );
  const total = 1e10;
  const staking = Number(
    await getAmountInAddresses(blockFrost, YUMMI, [
      STAKING_ADDRESS,
      MIN_ADDRESS,
      MIN_MASTERCHEF_ADDRESS,
      SUNDAE_ADDRESS,
      DRIPDROP_ADDRESS,
    ])
  );
  return {
    circulating: (circulating - staking).toString(),
    total: total.toString(),
  };
};

export default fetcher;
