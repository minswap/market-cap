import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MOM = "ed5517ccf67c60004355cee3c546c77226cd89a04b3aaeae6a65589e4d6f6d";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, MOM, [
    "addr1xyns7vaffqfnufk7cz9ndul7c06603rsuh9ypqmtfh8d4xp8pue6jjqn8cndasytxmelasl45lz8pew2gzpkknwwm2vq83rpx3", //Mom Treasury
    "addr1q9nvqt25uglec56600jem5cjny8rkmwqrtn3p2xzjsy4ya7nc6gnpw22jv2gv4qnwujfuuhpglfxv0eqy995aea4gnpqdjmqhl", // Mom Treasury Dapps
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, MOM, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", //$burnsnek
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury / 1e5 - burn / 1e5).toString(),
    total: (total - burn / 1e5).toString(),
  };
};

export default fetcher;
