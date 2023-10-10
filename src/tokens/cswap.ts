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
    "addr1x85h5c7dvyswpqxfl963f7frgze8zegjaazgwntkdpcghd9leu733t5csg60nlp4rwkf3xzah2eac6zd29kyfwvagjaq2fw7f9",
    "addr1xxnlg3d32mcplgatzcm24cg22pvdvsr7qel9hssnphcufx84maqv57cnx8g25gxyfg7358ladeanhr04yulxyly89klsrqpk6p",
    "addr1x8eejrck3a4rdlan74dyqxetwryxpkd4f7dheqy5amsdxrf6rez6rf0aknfus8pyvkqpd00x5atvazza6vt46q3u8v5s8jhvuk",
    "addr1xxd0a88hwlh2360sa979g5skfa7s8v4vgpks0ywe9n2k7uwyan5new6vc8mpsq7cew6p4qa8l0tp7dzs2kcz9cz7d8kqm0a0dy",
    "addr1xxk56d685qm64vxde5v2pc4xm0h3nna5rk0u7z9k785lw9p34he8rhc6c7nkvmhupuu7jw50efhuwexzfgx8zwm9553skvymcm",
    "addr1xy05hnh5r2y2r57dnxv6dzgd6l0fs3dj72a6lnwddwy3htk62gs8sn27dwddza409676jt2hw7knxjxr7evqul7sjrusym6rq9",
    "addr1xy4slu8t7aqe6jkcl9vs8nhanwcupd6c6txkt4gupyps2rfjjna9mvvl26ka09s5yt30nkzvvgkad22vastvw9hpd9wsx5dvw9",
    "addr1xx62pdtpmkmyd0n63v9vvn8y7r2vnw36gxj2cjhccgr75anqefhd3zhkxv0c9jdwsd7vahl5eep53xgn9up4yafm8f8qw8yku8",
  ]);
  const lockedRaw = await getAmountInAddresses(blockFrost, CSWAP, [
    "addr1z9k092kv0jga3tmell0l47kp3endnlt8x048tr25n0t3qn9f0924s2rfv0k2zvncgs7nxyd6ym55ar9x0hplm98arw6qt9q42l",
  ]);
  const treasury = Number(treasuryRaw) / 1_000_000;
  const locked = Number(lockedRaw) / 1_000_000;
  return {
    circulating: (total - treasury - locked).toString(),
    total: total.toString(),
  };
};

export default fetcher;
