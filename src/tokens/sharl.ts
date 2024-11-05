import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SHARL =
  "590f6d119b214cdcf7ef7751f8b7f1de615ff8f6de097a5ce62b257b534841524c";
const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 999_000_000_000;
  const treasury_team_and_distributorsRaw = await getAmountInAddresses(
    blockFrost,
    SHARL,
    [
      "addr1x8mpnsx06npcg40wnrk0umup7qcvyfz0nq7s5fv7pxdhk20kr8qvl4xrs327ax8vlehcrupscgjylxpapgjeuzvm0v5s0xgeht", // community wallet
    ]
  );

  const uncirculated = Number(treasury_team_and_distributorsRaw);

  return {
    circulating: (total - uncirculated).toString(),
    total: total.toString(),
  };
};

export default fetcher;
