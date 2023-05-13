import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const GENS =
  "dda5fdb1002f7389b33e036b6afee82a8189becb6cba852e8b79b4fb0014df1047454e53";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, GENS, [
    "addr1xyjan66zyj6tef93u795axqcqwg353fnx63tzaayursj9ke9m845yf95hjjtreutf6vpsqu3rfznxd4zk9m6fc8pytdsmahfkf",
    "addr1xyr8h2yyn8lgz9epvu8f40e44vtxy7r0nahpj3u75vhe7fqx0w5gfx07sytjzecwn2lnt2ckvfuxl8mwr9reage0nujqyzdx0y",
    "addr1xxwu7tkfvsvmjpecy5s87a9jgpeptrmgq0dkccq4l5zhvm5aeuhvjeqehyrnsffq0a6tysrjzk8ksq7md3sptlg9wehq74j6vl",
    "addr1xx2392yc53nsazxx5z9y40q7gttenemhhgcjaxr5sllugpv4z25f3fr8p6yvdgy2f27puskhn8nh0w3396v8fpllcszs99vzge",
    "addr1xxnv39tyvfvlhl30quelamanyq2exzqwl46y7tr4mzh35j4xez2kgcjel0lz7penlmhmxgq4jvyqalt5fuk8tk90rf9qphswe4",
    "addr1xy9g0r758h52mnnps0eqdrzgy573anh4t0mrmn3w8k95n3g2s78ag00g4h8xrqljq6xysffarm802klk8h8zu0vtf8zsw5shk9",
    "addr1x9wrenxj9acmzfhqns27v7mgdwl2kuull2hdjszyxnr5pwju8nxdytm3kynwp8q4ueaks6a74deel74wm9qygdx8gzaqjap2uz",
    "addr1xysfxc60v6vdwzddeen22ur4u9atdk4k499yfc8e4fsh5u3qjd357e5c6uy6mnnx54c8tct6kmdtd222gns0n2np0feqjzv4eq",
    "addr1xys8w4jtrzqyqhecamqzp9ntlx5ehmt29ehjhf3988nxdweqwatykxyqgp0n3mkqyztxh7dfn0kk5tn09wnz2w0xv6asu4c2g6",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
