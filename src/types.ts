<<<<<<< HEAD

=======
>>>>>>> d9e0e13f51538fd05e5ff70205d3b74f9d109897
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
<<<<<<< HEAD
  total?: string;
  circulating?: string;
}

export type SupplyFetcher = (options?: FetcherOptions) => Promise<SupplyFetcherResponse>;
=======
  circulating: string;
  total: string;
};

export type SupplyFetcher = (
  options?: FetcherOptions
) => Promise<SupplyFetcherResponse>;
>>>>>>> d9e0e13f51538fd05e5ff70205d3b74f9d109897
