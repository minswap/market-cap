import { defaultFetcherOptions, SupplyFetcher } from "../types";
<<<<<<< HEAD
import {
  getAmountInAddresses,
  getBlockFrostInstance,
} from "../utils";
=======
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";
>>>>>>> d9e0e13f51538fd05e5ff70205d3b74f9d109897

const AADA = "8fef2d34078659493ce161a6c7fba4b56afefa8535296a5743f6958741414441";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 29_500_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, AADA, [
    "addr1qysm5h2w24tlffmpscazkymz746tp72hyq7tgdx6j3ca4p60mv7emuks64z8l55krwm68n59574j7cdfk7ja2s684fvqm72l6y",
    "addr1qxka8z8c4qglsjuzpl5llfkrgwklhh7mg245jfpgauwqgvqkwvwuue8g9j06a4jpprgu59xf02d8x2dperyd9dglrxdsl04fwp",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
