import { supplyFetchers } from "../src";

test("test supply fetchers", async () => {
  jest.setTimeout(30_000);
  const onlyTest = process.env["ONLY_TEST"];
  if (onlyTest) {
    const fetcher = supplyFetchers[onlyTest];
    expect(fetcher).toBeDefined();
    // eslint-disable-next-line no-console
    console.debug(await fetcher());
  } else {
    await Promise.all(Object.values(supplyFetchers).map((f) => f()));
  }
});
