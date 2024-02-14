import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const PRSPR =
  "52489ea87bbceaf6375cc22f74c19382a3d5da3f8b9b15d2537044b95052535052";
const PRSPR_POLICY_ID =
  "52489ea87bbceaf6375cc22f74c19382a3d5da3f8b9b15d2537044b9";
const TREASURY = "addr1wydpsqf5zz9ddy76d3f3jrrf6jkpyjr48nx5a706w9y68ucy4wu6s";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const circulating = await fetcher.getSupplyFromPolicyMetadata(
    PRSPR_POLICY_ID
  );
  const total = 375000000;
  const treasury = Number(
    await fetcher.getAmountInAddresses(PRSPR, [TREASURY])
  );
  return {
    circulating: (circulating - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
