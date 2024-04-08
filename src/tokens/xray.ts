import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const XRAY = "86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c14358524159";
const TREASURY_ADDRESSES = [
    "addr1qyc98ysmvxunqslu3y5t9gpt2mm8dp3puylpq7n5n908jldw8w6w5nmvw86ullauxldxdjsfauyrattxw6yevxp72nnsq3lt0u", // stage2 fund
];

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
    const total = 324_922_240;
    const treasury =
        Number(await fetcher.getAmountInAddresses(XRAY, TREASURY_ADDRESSES)) /
        1e6;
    return {
        circulating: (total - treasury).toString(),
        total: total.toString(),
    };
};

export default fetcher;
