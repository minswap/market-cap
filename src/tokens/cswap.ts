import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CSWAP =
  "bf524874448cbf52be3a26133b0a0edf5eb65c09ffed383b881ad3274353574150";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 2_500_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CSWAP, [
    "addr1xxdulr2pxqx07pwjasfw2y6dl20wmyq4yhfggdf99x4jvnnk6wr84sntzxn3s943vlnqqrey6cmuzrz2m3tz3yj3n4vssyvg45",
    "addr1x8283erf082rna7etqkjfeelsm6vpu928y0kqklemu5ntvqtqyzh4ykrev5jvj5l33pw852v3jk6khm9a54sdzjkavqsmc6ntp",
    "addr1v93mxm3f82l5fle2r94lnwnaqm47macfvf6y4707yyl7l0c9c62ny",
    "addr1x9he2m59sr6cq4qsanuq80ch3r5f0mtvf2a05tw9ek3kkcmkq45ptq7dftqc3l5ln6cj4rtxqwsfxdj6vevudqv7gh2spdzjdy",
    "addr1xxm7mxtynhzuq9l4x92jjps2tmlckycw5z6dxgv05gyyu86cu7ark62lnqxj2dhq8x4qfsjfyz6l5kscygp9ayt2hrjsys8ljs",
    "addr1x9qwx4slan8mvlfrpz25sutxwx0zzlrmkzsj4z47ctq55dllshx3k9k5t2d6axj39d25arrlwfsrh23qkpum8ne0ur9swn2k56",
    "addr1x9a9c47t89czvjjjjnyk7qkaa8zlcasyc8nkd45guraa7ehy6kecv8ma4xsu0klm9aefu0vqs3u9u79xdk75f76alaes7wjejj",
    "addr1xx2x00pkv90v8g5wdtcn8457l28sdslzjkuqhvcffmgdt9gwyyp7kgg820ce8eerk3w0vppafj6jvgw3ddwn6lt5z0tshf0zn9",
    "addr1xxxfdas3zqhfmj07at0w7d3pvse8ml4wc2wjhw9hcfx24je8kh57vpmn442thqjpjnne42wmcp6a4uma8k72zz4vpmfq485cr4",
  ]);
  const treasury = Number(treasuryRaw) / 1_000_000;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
