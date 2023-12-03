import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const STABLE =
  "2adf188218a66847024664f4f63939577627a56c090f679fe366c5ee535441424c45";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 206_420_691_337n;
  const treasury = await getAmountInAddresses(blockFrost, STABLE, [
    "stake1uyjlfag0xqnmyk6tfa5a0weanrl4yzxxf0kjhk4k0e2s4ygczhp79", // $stablepayments
    "stake1uxufvv9llknwmracxxsnxqe8dnc5ut0z2jgparqz5rh9y5cda5g3k", // $stablelistings
    "stake1uyuxkjldqjztcfuj8h288rc9ryfxzek7375vwplhzrns7zqwy9emg", // $stablerewards
    "stake1uyc3xeye50t8d9vhm7jt5jn83ddfdtwr0s64v0qhy7q2jfcqejl53", // $stablemarketing
    "stake1uxjmh6ngs3xsk3d9lxqnne6yqm2822e23hpv0j6q3uruxzc865t3j", // $stableutility
    "addr1wy93qg6raxgntrpy74fmxn5neayprs6rtp53ddy96tkj5xg82vvfn", //addr1
    "addr1w82ceyskcd8vujk2heklkf7l42wpy0k278rp0jvs64k55hsr30mz9", //addr2
    "addr1w8a3ynzfd5ammrmtvrly4s5vrlqu50qnk3pyrk5z87ehymg4nr2de", //addr3
    "addr1wy0ur9gawuuemzj45q6xu50mgx7qc7c9qpkh4cp8peaq3ys4rlp09", //addr4
    "addr1wxu5x4m5wfpf90yu43n60rsky0s3tq20pujs6pv4ax3wh7qnvs9qr", //addr5
    "addr1wxchdurl39kkvulvnjmwhjp9mqhcqelqupgx5jsgytv9q4qvuzhq5", //addr6
    "addr1wyqqxare94qycy4e6z2hwgjcmgkdjk03ddpr2dyc42ce46q49zw4j", //addr7
    "addr1w9nawwpm3s4swsfxvgqmvq67wz35a5p3s8uf7wk6les0jvqs82u2x", //addr8
    "addr1w8adkv74pasy4stalxlf85xplwwcd7zgl4zgf54j5a9gprq2k5aaq", //addr9
    "addr1w85ckfnpkwsn9fcxs27rg8u5czrl26juqp36qdek3rgr9zsttatll", //addr10
    "addr1w83ugfve6chrcar7y7wyych65w474hfchwx6a3jkff9vdfcd3engq", //addr11
    "addr1wx755epje54nrahgz6qe3v32g4gxkxd422hwmwxxg5ygpygmqn56k", //addr12
    "addr1w9ppm4cqgwmj249eyn6shu288h599dynkz6armkr0a8v96s8mp05t", //burn addr
  ]);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
