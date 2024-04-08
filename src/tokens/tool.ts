import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const TOOL =
    "ac015c38917f306a84748c2d646bed90bdd64421c592163e60702d735453555255";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
    const total = 1_000_000_000;
    const treasuryRaw = await fetcher.getAmountInAddresses(TOOL, [
        "addr1vxndsnat5pgddcaqcddu3epun8gvh42yt4z6ekcr8p58wagnl5ek7", // TOOL TREASURY
    ]);
    const treasury = Number(treasuryRaw);
    return {
        circulating: (total - treasury).toString(),
        total: total.toString(),
    };
};

export default fetcher;
