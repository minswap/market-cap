import { SupplyFetcher } from "../types";

const fetcher: SupplyFetcher = async () => {
    const total = 3e8;
    return {
        total: total.toString(),
    };
};

export default fetcher;
