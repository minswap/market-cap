import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
    const total = 300e6;
    return {
        total: total.toString(),
    };
};

export default fetcher;
