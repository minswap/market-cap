import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const MIN = "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e";
const TREASURY_ADDRESSES = [
  "addr1vx00uxlpkzgkrga47zdypj40a3yjs0u3wad88kdy9l3rekcrmyz69", // unconverted MIN for MINt
  // TREASURY
  "addr1zymeshes0pxnr2s4v95a4wchxs74l0lqt5n3f6rxynnepgjj2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq64anuz", // team
  "addr1z87vw6ts32hywu4j4kyk9qfgd36zhzx3y7fc786vgzlc57zj2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq9rwl7c", // dev fund
  "addr1z9wdv59sq7zzy2l6gchq3247lz7ssfsxs45nj4njhwsp5uzj2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pqzygnta", // DAO
  "addr1z9mjhq5c4s0smv2c92g9yvecpju3p8cfaneu8jzwq97ry62j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pqw9pw55", // incentives & partnerships
  "addr1zx0wxal6dz7rjzxk2mwfvj9564rp9uajqrscftx44tp6ha6j2c79gy9l76sdg0xwhd7r0c0kna0tycz4y5s6mlenh8pq83j9cv", // yield farming treasury
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 3e9; // 3 billion
  const treasury =
    Number(await getAmountInAddresses(blockFrost, MIN, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
