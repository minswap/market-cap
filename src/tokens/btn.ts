import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const BTN = "016be5325fd988fea98ad422fcfd53e5352cacfced5c106a932a35a442544e";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
    const total = 25e6;
    const circulating = await fetcher.getSupplyFromAssetMetadata(BTN);
    const circulatingWithDecimals = Number(circulating) / 1e6;
    return {
        circulating: circulatingWithDecimals.toString(),
        total: total.toString(),
    };
};

export default fetcher;
