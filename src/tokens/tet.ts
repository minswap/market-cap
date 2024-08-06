import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const TET = "6947eccc74ebf8c1716339b97af768bfbc70d330a743b79bbc5ccdeb544554";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const assetInfo = await blockFrost.assetsById(TET);
  const totalAmount = Number(assetInfo?.quantity);

  const lockAddresses = [
    "addr1wy669f5qjm82h3wj8vcy7lg8zs2n4us3ks62cssl84p730g92rwkw", // vault address
    "addr1w96qxyn67hy2qgpz4tsulkpu0y3zv4wfq9fzgd38m07pnuq0w542k", // vesting address
  ];

  const lockedAmount = Number(
    await getAmountInAddresses(blockFrost, TET, lockAddresses)
  );
  return {
    circulating: Number(totalAmount - lockedAmount).toString(),
    total: totalAmount.toString(),
  };
};

export default fetcher;
