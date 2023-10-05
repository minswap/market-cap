import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const LQ = "da8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 21_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, LQ, [
    "stake17yl23x3q5v4hpjyywjal326ku2953kn4dhkrq5edmqcyj4cz0h7v5", // user dist
    "stake17x5s640797a4wlu0x3wtxrytrq8hx67smk238vpvjgjkjgqhmc4sl", // team
    "stake17yr6hxevthv7fr6la584r3sy4jlgf7uwtc2udkwzj8zt3vg2mzq4x", // treasury
    "stake17xljj9au6hels8vtn5rf3ctgux9azsfnnwqgx4y7x0y5ytsu0nj2z", // staking
    "stake17y46nf93jdpcjdjxr22re49ymxk0gp8tgnpeucuxhk4gnyc6ptg0f", // investors
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
