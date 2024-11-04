import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TOKEN =
  "86340a33acf14b5c967584c9a20e984695ab3289696d138048f572be4255524e5a";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, TOKEN, [
    "addr1qxc6u2d5ppeuhg7tkj5quf3csxp2022g98az65hpad9m6yreuxes6p3hhg880tegsg95xqwek6srgac5jq04x9rcm2qq6a6md7", // TREASURY
    "addr1qxtqu8cvxjxrh035s6f9k698rglpguz4xs8gw5edja2z6fp4x79ct53d3gpl0g3w4eyvnlv09nkjqvrkspfxjza3h0eqy34flk", // team
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
