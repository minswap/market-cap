import { SupplyFetcher } from "..";
import { getAmountInAddresses } from "../utils";

const MILK = "8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b";

const fetcher: SupplyFetcher = async () => {
  const total = 10_000_000n;
  const treasury = await getAmountInAddresses(MILK, [
    "addr1v8c3mztrzpjqxzrcl8rvxln8xyvanz6pufuaju7rwkglnychv3cg3",
  ]);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
