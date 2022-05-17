import { supplyFetchers } from "../src";
import { SupplyFetcher } from "../src/utils";

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

  test.each(fetchers)(`test fetcher for token %s`, async (_, fetcher) => {
    const resp = await fetcher({ timeout: 20_000 });
    expect(typeof resp.circulating).toBe("string");
    expect(typeof resp.total).toBe("string");
  });
});
