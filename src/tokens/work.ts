import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const WORK =
  "bbd0ec94cf9ccc1407b3dbc66bfbbff82ea49718ae4e3dceb817125f24574f524b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 300_000_000n;

  const treasury = await getAmountInAddresses(blockFrost, WORK, [
    "stake1u9l0ry8y7a4nl70sjjsg4v76p59sdq43cf7yh9ew9xxp0lg7vyqjw",
    "addr1v8d9p0fqrwxkp63nspcv47esgrmjhv9hjfv8z6ptyludlnqhwdlhh",
    "addr1vxauj43mtwwfh0nxfht2g7z6cpt4ksmsaqwrugdeeanv4cgltw6dp",
  ]);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
