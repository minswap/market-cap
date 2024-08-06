import axios from "axios";

import { SupplyFetcher } from "../types";

const REIT = "52d4b39c2407ce020ab4abb785d820a3ad5a2fa07600d07a205e509f";
const REIT_ASSET = `${REIT}52454954`;

const fetcher: SupplyFetcher = async () => {
  const total = 50_000_000;

  const instance = axios.create({
    baseURL: `https://cardano-mainnet.blockfrost.io/api/v0/`,
    timeout: 1000,
    headers: { project_id: process.env["BLOCKFROST_PROJECT_ID"] },
  });

  const assetInfo = await instance.get(`assets/${REIT_ASSET}`);
  const total_mint = assetInfo.data.quantity;

  return {
    circulating: total_mint,
    total: total.toString(),
  };
};

export default fetcher;
