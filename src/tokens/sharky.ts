import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const SHARKY = "20fda53c96fc6ac5622ca94fd27a473c42c7ec56d0e96bceef926c91536861726b79";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 585_858_585_858;
  const treasuryRaw = await getAmountInAddresses(blockFrost, SHARKY, [
    "addr1q9undvvv5ygner7arwp970m2q6hgwymmnewzm35wv00kexz5m9upnclmqh34548waj3qws89xd39q9cxy663v7ely87swr9425", // $sharkyteam
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, SHARKY, [
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
