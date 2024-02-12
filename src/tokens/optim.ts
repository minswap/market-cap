import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getMaestroClient } from "../utils";

const OPTIM =
  "e52964af4fffdb54504859875b1827b60ba679074996156461143dc14f5054494d";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const total = 1e8;
  const treasuryRaw = await getAmountInAddresses(maestro, OPTIM, [
    "stake178j4fcxw7pwgxw92yu28c2zqmjxnumumj52hxr9jtr6qwngf2ve5n", // OPTIM MULTISIG
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
