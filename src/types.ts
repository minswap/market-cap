export type FetcherOptions = {
  /**
   * Fetch timeout in milliseconds. Default to 20s
   */
  timeout?: number;
};

export const defaultFetcherOptions: FetcherOptions = {
  timeout: 20_000,
};

export type SupplyFetcherResponse = {
  circulating: string;
  total: string;
};

export type SupplyFetcher = (
  options?: FetcherOptions
) => Promise<SupplyFetcherResponse>;
