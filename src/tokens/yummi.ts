import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const YUMMI =
  "078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec92479756d6d69";
const YUMMI_POLICY_ID =
  "078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec924";
const STAKING_ADDRESS =
  "addr1wydpsqf5zz9ddy76d3f3jrrf6jkpyjr48nx5a706w9y68ucy4wu6s";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const circulating = Number(
    await blockFrost
      .assetsPolicyById(YUMMI_POLICY_ID)
      .then((resp) => resp[0].quantity)
  );
  const total = 1e10;
  const staking = Number(
    await getAmountInAddresses(blockFrost, YUMMI, [STAKING_ADDRESS])
  );
  return {
    circulating: (circulating - staking).toString(),
    total: total.toString(),
  };
};

export default fetcher;
