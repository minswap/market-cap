import { SupplyFetcher, supplyFetchers } from "../src";

const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

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
      // Delay for 110ms to avoid hitting the rate limit of 10 calls/second
      await delay(110);
    });
  }
});
