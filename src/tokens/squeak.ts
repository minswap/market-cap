import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const Squeak = "097f37ef3f64a7967c645cb2a40b67594b0f6f4d187d654ff927403753717565616b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;

  const burnRaw = await getAmountInAddresses(blockFrost, Squeak, [
    "addr1z8kadskrrswl3avwe9psd3mar5l7shf06slyxr2tetwln4nzg06w6dvxg0vuzx4s0uenlr0vfucctcfwpa2eshd86taqduntvj", //$chasm
  ]);

  const burn = Number(burnRaw);
  return {
    circulating: (total - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
