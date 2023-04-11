import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const NINJAZ =
  "df1d850c46d6c9d12cbf6181c35db9225a91b77c8a646b7f636f8ae40014df104e494e4a415a";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 5_000_000_000;
  const treasury = await getAmountInAddresses(blockFrost, NINJAZ, [
    "addr1x83nemulpeta9sdvmys3stka3qr3vdgt2cea9nd7k43pknwyzjxyjwc0htews4pm02nnyaa0sep8lmc9lsz8e4dfleeqe4r25a",
    "addr1x8cesdmszn65gp0wulhle6fvtkgcumu7kuyjwgd3unvcm5hljfu8vk7x6lh6vd8wjf2wymdq339fq8h85ujgky928jxs0g2eq4",
    "addr1x8qxwpaamqac5pjvrqsesm6s0kgvh4fjg2gxqgfgm3z0482690h9e0eu6px7y70f4en0mlveshvzwuvmxjpl8v7knklqtz5eda",
    "addr1x8xscqxca9szg7xgsuh2cfjwunjutqevawx6sdp0qxvk8upfaw2m3ygzjvu6639tghza86gr99f85lk2874r9yn8ukwsguhnuw",
    "addr1xx86d7hxnyhnu4sq3kwq2w67w54e6t3wpd8vm3wcdy6n02kr7ayf3pjwwpyrntnaexdxzemq3k7adaq5m4cxcph06pksh32ndx",
    "addr1xxnnkkfc4uwwut0nc9nqd4sw955ehsv46gahq5vue8dljsll5f6g7hyfa82fc9uq202unkykmzzd3ymx7rc54sjrywaqhj2a24",
    "addr1xxs8mllzludfkmfaunx2g38xr8grzxuruul46z2h0t7n62x2rj8vv8evw74rudkjjw6ufm5sy39cvwawcvuw2scfyqmqsu0wgd",
    "addr1qx2waaxg7hgt79a70892qegnerdqhxy45uyn698wncegwryh0ze5nrhs9ajhgnzd6eum9zuhu5e7g533cacmndqgu20shextxn",
  ]);

  return {
    circulating: (total - Number(treasury) / 1e6).toString(),
    total: total.toString(),
  };
};

export default fetcher;
