import { blockFrost, SupplyFetcher } from "..";

const MILK = "8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b";

const fetcher: SupplyFetcher = async () => {
  const total = 1e7; // 10 million
  const treasuryBalance = await blockFrost
    .addresses("addr1v8c3mztrzpjqxzrcl8rvxln8xyvanz6pufuaju7rwkglnychv3cg3")
    .then((resp) => {
      const balance = resp.amount.find(({ unit }) => unit === MILK)?.quantity;
      return Number(balance ?? "0");
    });
  return {
    circulating: (total - treasuryBalance).toString(),
    total: total.toString(),
  };
};

export default fetcher;
