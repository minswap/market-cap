import { SupplyFetcher } from "..";
import { getAmountInAddresses } from "../utils";

const MIN = "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e";
const TREASURY_ADDRESSES = [
  "addr1vy5nz5a8lvrd294n4cachm7qmv5jsjal9etkpwyjvqhsunq70e3fe", // treasury
  "addr1v9urht2tqg7ncs7r545qdj2wn5tpam5l04t7eyermpmyvmg5xf2mt", // FISO
  "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // yield farming
];

const fetcher: SupplyFetcher = async () => {
  const total = 5e9; // 5 billion
  const treasury =
    Number(await getAmountInAddresses(MIN, TREASURY_ADDRESSES)) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
