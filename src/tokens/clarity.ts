import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CLARITY =
  "1e76aaec4869308ef5b61e81ebf229f2e70f75a50223defa087f807b436c61726974792044414f20546f6b656e";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2e9;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CLARITY, [
    "stake1u934vrjj6cdw5rrd2vewahxu3nrd9wslhjlkvamd5kc8ytce7sjsk", // Strategic Partner Vesting Wallet
    "stake1u8g43cjercws2x26xmtlukgg3nfy4m0l6uw6dqtcp0y5fhc5pm7q5", // Future Development Wallet
    "stake1uxs3nf3qj4xuyv9t63vyhxq8glec3zcxw0a03vegwdzu6hglwwmld", // Team Vesting Wallet
    "addr1w87vg0x4k2x95dlp7mrlef909lgk25kgajhk2dxzxk0tquclfp0at", // DAO treasury
  ]);

  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
