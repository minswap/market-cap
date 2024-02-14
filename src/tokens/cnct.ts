import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const CNCT = "c27600f3aff3d94043464a33786429b78e6ab9df5e1d23b774acb34c434e4354";

const cnctFetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 80_000_000;
  const treasuryRaw = await fetcher.getAmountInAddresses(CNCT, [
    "addr1qy0yswstqah6zwxvd5csh0gyty80pcpfqf0ghe24n798r07hdz6r6fp6z96rgh8dvu6yjx8smmany40anu8264r0ek3ssujtw9",
  ]);

  const treasury = Number(treasuryRaw) / 10_000;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default cnctFetcher;
