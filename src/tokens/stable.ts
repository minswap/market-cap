import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const STABLE =
  "2adf188218a66847024664f4f63939577627a56c090f679fe366c5ee535441424c45";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 206_420_691_337;
  const treasuryRaw = await getAmountInAddresses(blockFrost, STABLE, [
    "stake1uyjlfag0xqnmyk6tfa5a0weanrl4yzxxf0kjhk4k0e2s4ygczhp79", // $stablepayments
    "stake1uxufvv9llknwmracxxsnxqe8dnc5ut0z2jgparqz5rh9y5cda5g3k", // $stablelistings
    "stake1uyuxkjldqjztcfuj8h288rc9ryfxzek7375vwplhzrns7zqwy9emg", // $stablerewards
    "stake1uyc3xeye50t8d9vhm7jt5jn83ddfdtwr0s64v0qhy7q2jfcqejl53", // $stablemarketing
    "stake1uxjmh6ngs3xsk3d9lxqnne6yqm2822e23hpv0j6q3uruxzc865t3j", // $stableutility
  ]);

  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;