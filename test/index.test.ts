import { SupplyFetcher, supplyFetchers } from "../src";

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

  // test fetchers in batch to avoid rate-limiting
  for (let i = 0; i < fetchers.length; i += 10) {
    const fetchersBatch = fetchers.slice(i, i + 10);

    test.concurrent.each(fetchersBatch)(
      `test fetcher for token %s`,
      async (_, fetcher) => {
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
      }
    );
  }
});
