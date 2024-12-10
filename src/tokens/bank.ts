import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BANK = "2b28c81dbba6d67e4b5a997c6be1212cba9d60d33f82444ab8b1f21842414e4b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2.5e12;

  const burnRaw = await getAmountInAddresses(blockFrost, BANK, [
    "addr1q8lfmg4v0nk9v6en5s4fv5pgvd3zhd8xd7lsfe8gtgew3kyzcqxx64ppncsvwzemnwwn5wysaqjp5623ljrzrxlsfwnq50ay0s", // $bankercoinburn
  ]);

  const burn = Number(burnRaw);
  const totalSupply = total - burn;
  return {
    circulating: totalSupply.toString(),
    total: totalSupply.toString(),
  };
};

export default fetcher;
