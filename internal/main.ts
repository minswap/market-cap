/* eslint-disable no-console */
import { backOff } from "exponential-backoff";
import fs from "fs";
import logfmt from "logfmt";

import { SupplyFetcherResponse, supplyFetchers } from "../src";

async function main(): Promise<void> {
  const marketCapData: Record<string, SupplyFetcherResponse> = {};
  for (const [key, supplyFetcher] of Object.entries(supplyFetchers)) {
    try {
      await backOff(
        async () => {
          const startTime = new Date();
          const data = await supplyFetcher();
          marketCapData[key] = data;
          const endTime = new Date();
          console.info(
            logfmt.stringify({
              time: endTime.toISOString(),
              level: "INFO",
              message: "done fetch market cap for asset",
              duration: `${(endTime.getTime() - startTime.getTime()) / 1000}s`,
              asset: key,
              total_supply: data.total,
              circulating_supply: data.circulating,
            })
          );
        },
        {
          retry(err, attempt): boolean {
            console.error(
              `fail to run fetcher for ${key}, retry ${attempt}...`,
              err
            );
            return true;
          },
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
