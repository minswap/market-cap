import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const PRSPR =
  "52489ea87bbceaf6375cc22f74c19382a3d5da3f8b9b15d2537044b95052535052";
const PRSPR_POLICY_ID =
  "52489ea87bbceaf6375cc22f74c19382a3d5da3f8b9b15d2537044b9";
const TREASURY = "addr1wydpsqf5zz9ddy76d3f3jrrf6jkpyjr48nx5a706w9y68ucy4wu6s";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const circulating = Number(
    await blockFrost
      .assetsPolicyById(PRSPR_POLICY_ID)
      .then((resp) => resp[0].quantity)
  );
  const total = 375000000;
  const treasury = Number(
    await getAmountInAddresses(blockFrost, PRSPR, [TREASURY])
  );
  return {
    circulating: (circulating - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
