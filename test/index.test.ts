import fs from "fs";
import path from "path";

import { SupplyFetcher, supplyFetchers } from "../src";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Function to get the number of addresses dynamically from the token's .ts file
const getAddressCountForToken = async (token: string): Promise<number> => {
  const tokenFilePath = path.join(
    __dirname,
    "../src/tokens",
    `${token.toLowerCase()}.ts`
  );

  if (!fs.existsSync(tokenFilePath)) {
    return 1; // Default to 1 if file doesn't exist
  }

  const tokenModule = await import(tokenFilePath);

  if (tokenModule && Array.isArray(tokenModule.default)) {
    return tokenModule.default.length;
  }

  return 1; // Default to 1 if no addresses array is found
};

describe("supply fetchers", () => {
  const fetchers: [string, SupplyFetcher][] = [];

  if (process.env["ONLY_TEST"]) {
    const token = process.env["ONLY_TEST"];
    const fetcher = supplyFetchers[token];
    expect(fetcher).toBeDefined();
    fetchers.push([token, fetcher]);
  } else {
    fetchers.push(...Object.entries(supplyFetchers));
  }

  for (const [token, fetcher] of fetchers) {
    test(`test fetcher for token ${token}`, async () => {
      // Fetch the number of addresses dynamically
      const addressCount = await getAddressCountForToken(token);

      const resp = await fetcher({ timeout: 20_000 });
      if (resp.circulating !== undefined) {
        expect(typeof resp.circulating).toBe("string");
      }
      if (resp.total !== undefined) {
        expect(typeof resp.total).toBe("string");
      }
      if (process.env["ONLY_TEST"]) {
        // eslint-disable-next-line no-console
        console.debug(resp);
      }

      // Calculate custom delay based on the number of addresses
      const customDelay = 110 * addressCount;

      // Delay for customDelay ms to avoid hitting the rate limit
      await delay(customDelay);
    });
  }
});
