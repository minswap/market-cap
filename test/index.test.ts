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

  test.concurrent.each(fetchers)(
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
});
