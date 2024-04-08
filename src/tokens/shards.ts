import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const TOKEN =
    "ea153b5d4864af15a1079a94a0e2486d6376fa28aafad272d15b243a0014df10536861726473";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
    const total = 5_000_000;
    const treasuryRaw = await fetcher.getAmountInAddresses(TOKEN, [
        "addr1w95dsllnucgg53lj8qhdcgjnw40hlsctkeh8udt7uhud2tgjfyagq", // DripDropz Instant Rewards
        "stake17yavsn3jqqxm29tcgrjpj8e960tf00hkkvzaqxv6tt8ud7s4kw5vn", // GameFi Incentives Reserves
        "addr1wx4ua0djv8c4fvkl8t08z0duf3lw8fl4qujvevwx4m9c7ygma04rr", // Blockchain-wide Distribution (Cardano) & SHARDS/ADA LP Rewards
        "stake17yqphvez52gkae448avqr5smpztvlrwmwsvfhgmp84laxes3zfyq0", // Private Investors
        "stake178yzhvwqsw56qnz3lj4heu08m7tvl9z95zk4e2tpj4y8wkc7wmpzz", // FPS Treasury
        "stake1u8yt8czlj5svzc4jvr3w230tsjklctw4tvhz43k5recvfvqwnvelg", // FPS Team Wallet
    ]);
    const treasury = Number(treasuryRaw) / 1e6;
    return {
        circulating: (total - treasury).toString(),
        total: total.toString(),
    };
};

export default fetcher;
