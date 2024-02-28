import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const KITUP =
    "b166a1047a8cd275bf0a50201ece3d4f0b4da300094ffcc668a6f4084b49545550";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
    const blockFrost = getBlockFrostInstance(options);
    const total = 1e9;
    const treasuryRaw = [
        "addr1q9dt2a9jjxexqtha6p06wyl4muu5fzesd6538skwuelfk93hmqmrvuf2n6rkfmfzjlfwh3ht0tjz0wnat2qxdnnd9s6qu94lzl",
        "addr1x8qumw7876v0z8jpkv4wwtd7cjs076llv6r94jke8clwcuqtaxl5rtl5khfsdfp7n899h9uw5dyrh4vlwtdd7kn7gyns62nc64",
        "addr1x93vzx88sxylfz53335fjsdh79vg4ne3qtgfc3007dm4e3rr26u07qrkyymvtvvvapypg3x9mc3uze4ds65jrue50zjsnnaepq",
        "addr1qx565rul862deq0rjkp6ygl3lq84prpxq7wc30ualejtlr3zzjfnshzvjcr9qghqd0tlq4srst9axwm00cny5h8ajmvq4dr8tx",
    ];

    const burnRaw = [
        "addr1xxnuf0zhrtzv2rptr66748nmthugjxtnj0rply4marc4sj0pys7km7gms35hnwyps05y6un3jws0kuha9vl5c8tn94cq6d58kr",
    ];

    const treasury =
        Number(await getAmountInAddresses(blockFrost, KITUP, treasuryRaw));
    const burn =
        Number(await getAmountInAddresses(blockFrost, KITUP, burnRaw));

    return {
        circulating: (total - treasury - burn).toString(),
        total: (total - burn).toString(),
    };
};

export default fetcher;
