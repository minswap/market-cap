import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TOKEN =
  "83099a945e95a38d3dc3ab562af81671ed094becf493074251d3f45062616279536869747a75";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 777_777_777_777;
  const treasuryRaw = await getAmountInAddresses(blockFrost, TOKEN, [
    "stake1ux8qy73ylrk6pclmp880kffxz78t6vmq8jn04e2s6lchwps3fzafa", // giveaway
    "stake1uxudsd30d6k5l4wwt0sf2t9numc2m8dpl3k45h2edxfqs3cccet2d", // advertising
    "stake1u9nmczw7ulpns6nqunnc4lwxse3v0emwgvzpg33jl68rz4sznuhfz", // utility
    "stake1u9rzlqgxczarm8ms0w5fqlj9nej5uctvduc6lqmn4xtp8mqyxdak9", // cex listings
    "stake1uy5rkqrl06sn6lqfqsax2nwtcykjl9atyv4xmnfw9zq0yxch9ceqr", // team
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, TOKEN, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
