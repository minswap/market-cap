import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const FIRE = "a4da8764a57e66a0085b5bfcde96c89b798d92ee83a75f59237e375b46495245";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 500_000_000;
  const treasuryRaw = await fetcher.getAmountInAddresses(FIRE, [
    "stake1ux7k5ztvhwj7ykv5v7vwjjzq8ckjk0v74z9p9m5w0t55f9clf62eq", // MinSwap Farm Rewards
    "addr1w8tqqyccvj7402zns2tea78d42etw520fzvf22zmyasjdtsv3e5rz", // DDz Rewards
    "stake1u94e6kguu8zzpaeevrnagm2f4u4huhh6uazupt3jytznumq93v7dh", // Charity Wallet
  ]);

  const treasury = Number(treasuryRaw);

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
