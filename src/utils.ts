import { BlockFrostAPI } from "@blockfrost/blockfrost-js";

export const blockFrost = new BlockFrostAPI({
  projectId: process.env["BLOCKFROST_PROJECT_ID"] ?? "",
  isTestnet: false,
});

export async function getAmountInAddresses(
  token: string,
  addresses: string[]
): Promise<bigint> {
  const amounts = await Promise.all(
    addresses.map(async (addr): Promise<bigint> => {
      const resp = await blockFrost.addresses(addr);
      const amount = resp.amount.find(({ unit }) => unit === token)?.quantity;
      return BigInt(amount ?? "0");
    })
  );
  return amounts.reduce((sum, x) => sum + x, 0n);
}
