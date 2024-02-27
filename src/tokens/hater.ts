import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const HATER = "e5fb9dea64fcf75b4e195f109bbf49bb99538b036f4a32681708f7dc4841544552"; 

//TREASURY
const TREASURY_ADDRESSES = [ 
  "addr1q8rscx39mnpd3ncmhv6shd5u22z8u9uah9knsup62dtn95qqe5nnuug95ku0x97exnv887qql9n63z4w7rtej9nc60wqv8kx8t"
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 666666666666666;
  const treasury = Number(
    await getAmountInAddresses(blockFrost, HATER, TREASURY_ADDRESSES)
  );

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
