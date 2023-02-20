import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CNETA =
  "b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  // source: https://docs.anetabtc.io/docs/user-guides/tokenomics/
  const total = 1_000_000_000n;
  const totalOnCardano = 1_000_000_000n;
  const treasury = await getAmountInAddresses(blockFrost, CNETA, [
    "stake1u8ypd7vtdsst25v65ddqgdgt7w9plww0zyqgktfrr0apscqepfcnm",
    "stake1uxpa2qrzplzsmq5d492xc3ge6g5hfsvymkakznvva5fcznsjy5ed5",
  ]);
  return {
    circulating: (totalOnCardano - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
