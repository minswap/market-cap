import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const OPT = "1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be4f5054";
const TREASURY_ADDRESSES = [
  "addr1q8cjej0sez2llnke25w5lsnl7yzvd6c7vs8hmkh302ykzznu0lpva8y4km9tc06ww203c9k5xsh50q02fewjv09ce8ksj6ghfd",
  "addr1q99cks4wwpxc4qltj38jyp3a6g6gp2peyx0eukfxutjv6l9gu0v3jhfq2vwmwdjg707d8ts52a4gl4vh3ygn6ywv5cls8m278u",
  "addr1qxza4j8v9dyn5ryx3z2d7la3tcqt4jklmvsw93373u5zysr654zt2jmqqngtplzkxw9eg5cggk4uy4css2fmdt0tz6gsjhe5xu",
  "addr1vxfa8dwzflct4re7qn2ls7t46w6rc479rafnwzqx4z2asuq6cg00t",
  "stake1uxtw5rd9pw6x7npyjh0pygfemlh9f2awyfmejduwuye6efge8shl2",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 45e6; // 45 million
  const treasury =
    Number(await getAmountInAddresses(blockFrost, OPT, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
