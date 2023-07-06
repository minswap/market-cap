import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const GENSX =
  "fbae99b8679369079a7f6f0da14a2cf1c2d6bfd3afdf3a96a64ab67a0014df1047454e5358";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, GENSX, [
    "addr1xyjan66zyj6tef93u795axqcqwg353fnx63tzaayursj9kchdata4q8f4eqmz4pct6uv6evyzxww9w8dg074ucfqwq5q4t8kuv",
    "addr1xyr8h2yyn8lgz9epvu8f40e44vtxy7r0nahpj3u75vhe7fr42hw3w0cr8vuet3jadk2utvas5yyhheezp9f58khuxnrqrd6tj2",
    "addr1xxwu7tkfvsvmjpecy5s87a9jgpeptrmgq0dkccq4l5zhvm3980xlztt3a2ms4m6jrud4q0az7c98fw3js6xmuw28akqssqgkaf",
    "addr1xx2392yc53nsazxx5z9y40q7gttenemhhgcjaxr5sllugp2m4vp8c0f234an9v8nawvy9ncegk70mtkxgguds4ky5vhstvdagc",
    "addr1xxnv39tyvfvlhl30quelamanyq2exzqwl46y7tr4mzh35jk56zy8wwj0qw72mvudnmsuulgrnf0256vd007ay6ww6hls3dk58n",
    "addr1xy9g0r758h52mnnps0eqdrzgy573anh4t0mrmn3w8k95n3gmh6zzwx4wrkuy46zdf72klqzysq5qt0sw984890s6gpaqgjaxd9",
    "addr1x9wrenxj9acmzfhqns27v7mgdwl2kuull2hdjszyxnr5pwhgz867vecgq2x92wm7d6xrt2mm40hvhnujd7m9kg9s2q0sa9tesz",
    "addr1xysfxc60v6vdwzddeen22ur4u9atdk4k499yfc8e4fsh5un95jtfjh09t26uk7tgy5lmup9w0v6ut9qyw2yk9ke3p4qqtcushk",
    "addr1xys8w4jtrzqyqhecamqzp9ntlx5ehmt29ehjhf3988nxdwlxzys005lkhwyk5n9v7wqapsdjzsjy4m6r4knlgwmgw4lsrylmt8",
  ]);

  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
