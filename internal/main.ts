import { backOff } from "exponential-backoff";
import fs from "fs";

import { SupplyFetcherResponse, supplyFetchers } from "../src";

async function main(): Promise<void> {
  const marketCapData: Record<string, SupplyFetcherResponse> = {};
  for (const [key, supplyFetcher] of Object.entries(supplyFetchers)) {
    try {
      await backOff(
        async () => {
          const data = await supplyFetcher();
          marketCapData[key] = data;
        },
        {
          retry(err, attempt): boolean {
            console.error(
              `fail to run fetcher for ${key}, retry ${attempt}...`,
              err
            );
            return true;
          },
          startingDelay: 500,
          numOfAttempts: 3,
        }
      );
    } catch (err) {
      console.error(`fail to run fetcher for ${key}`, err);
    }
  }
  fs.writeFileSync("/tmp/market-cap.json", JSON.stringify(marketCapData));
}

void main();
