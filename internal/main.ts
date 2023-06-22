import fs from "fs";

import { SupplyFetcherResponse, supplyFetchers } from "../src";

async function main(): Promise<void> {
  const marketCapData: Record<string, SupplyFetcherResponse> = {};
  for (const [key, supplyFetcher] of Object.entries(supplyFetchers)) {
    try {
      const data = await supplyFetcher();
      marketCapData[key] = data;
    } catch (err) {
      /* empty */
    }
  }
  fs.writeFileSync("/tmp/market-cap.json", JSON.stringify(marketCapData));
}

void main();
