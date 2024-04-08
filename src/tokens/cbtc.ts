import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const CBTC = "4190b2941d9be04acc69c39739bd5acc66d60ccab480d8e20bc87e3763425443";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
    const total = await fetcher.getSupplyFromAssetMetadata(CBTC);
    const totalWithDecimals = Number(total) / 1e8;
    return {
        circulating: totalWithDecimals.toString(),
        total: totalWithDecimals.toString(),
    };
};

export default fetcher;
