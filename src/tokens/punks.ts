import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const punks = "e633efbf19a37500c6f22965af3130baa34c3a644a146662dd2d74a250554e4b53";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 100_000_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, punks, [
    "addr1q8hnlxtw0gsxy53n3wcdepnal9fu5zm02zu2uvtgg6mg64ls455xwpcsxhh8fzpdmfpwsy6ugja9crtnsnmrhxwr9dps9x7wzc", // $punkstoken
  ]);

  const burnRaw = await getAmountInAddresses(blockFrost, punks, [
    "addr1w8qmxkacjdffxah0l3qg8hq2pmvs58q8lcy42zy9kda2ylc6dy5r4", // $snekburnwallet
  ]);

  const treasury = Number(treasuryRaw);
  const burn = Number(burnRaw);
  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
