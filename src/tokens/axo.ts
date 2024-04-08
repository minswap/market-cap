import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
    const circulating = await fetcher
        .axios("https://api.axo.trade/axo/circulating")
        .then((res) => res.data.toString());
    const total = await fetcher
        .axios("https://api.axo.trade/axo/total")
        .then((res) => res.data.toString());
    return {
        circulating,
        total,
    };
};

export default fetcher;
