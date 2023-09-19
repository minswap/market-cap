import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const PEPEBLUE =
  "21abdf54f427b378fe9ba07419eff6e8e8fe0c5932e1fee2d3853b9350455045424c5545";

const TREASURY_VAULT = [
  "addr1qxkmr0m22xeqludcg5rjdmecjxasu9fat0680qehtcsnftaadgykewa9ufvegeuca9yyq03d9v7ea2y2zthgu7hfgjtsddp6gr", // Yield Farming Rewards
  "addr1q9vm0hf5388yk0gjdzl567thmy6f2mc3dt0p09dt6u7fp7qyvwjm865g78xqml08m3ae48qk2g0klwa63eawr05cw02qu72ey0", // Potential Staking Initiatives
  "addr1qyxlw0wx4w7cdlwy4dtdygremqpfz7skyn60af8wl32a0jvq3mcxelvy8un2qlasklx5c326eqlzrwh25aaw2gumzw9qm5qc3q", // Ant Workers Vault
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 39e13; // 420T -> 390T
  const treasury = Number(
    await getAmountInAddresses(blockFrost, PEPEBLUE, TREASURY_VAULT)
  );
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
