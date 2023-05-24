import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const IAG = "5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147";
const TREASURY_ADDRESSES = [
  "stake1u9cms5rnmqjed2dxfs9xcq5zupxpcq3l0jq492te2auhppcnlfdsv", // Ecosystem Development Fund
  "stake1uyc5ycj8e8fq0ss6fpjv7627tczcwn26w0lrql2gcflqm0q2xd35e", // Community Incentives
  "stake1uxc38mnkfvsm0yc2un6g8yp49nshnv2t4rcvqapeahnm87ccz9ns8", // Liquidity 1
  "stake1uy8a6tmpcy9mh57m8puka0ra0zq2zt4pjcuphyh770u3spg8cn9zk", // Liquidity 2
  "stake1u9gc67yuparwf2qjvvsv5c652yf8zfcn7wwtmruap0fte6qyz6h9g", // Development
  "stake1ux0x89ur69hu2gqvsaw8fpt45zj4kt50h8lq4ycd68ycsmc9m4y99", // Advisors / Marketing
  "stake1uywysqcqqys7qewrcl0uhda8g25ecr5k2klsr2d45jmdpnsqmc5hh", // Team
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1e9; // 1 billion
  const treasury =
    Number(await getAmountInAddresses(blockFrost, IAG, TREASURY_ADDRESSES)) /
    1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
