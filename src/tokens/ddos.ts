import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const DDOS = "94bb5aa2fedb3a4097c91934c79634407f4634aa192587699ef927b744446f53";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);

  const total = 10_000_000;

  const burnRaw = await getAmountInAddresses(blockFrost, DDOS, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // SNEK burn address
  ]);

  const burn = Number(burnRaw);

  const teamRaw = await getAmountInAddresses(blockFrost, DDOS, [
    "addr1qxt6fmumauv24fszmfngncs695yj0e9etqsr7lm5ym4zude4alypnn0x8ckrucs8tga0lfl5v48ec656shce0fgpa3fq3dq4hq", // $ddosfund
  ]);

  const team = Number(teamRaw);

  return {
    circulating: (total - burn - team).toString(),
    total: total.toString(),
  };
};

export default fetcher;
