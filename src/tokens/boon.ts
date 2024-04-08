import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const BOON =
    "1cd92100fc05fce7416b3857a079780164eeaf8f5613f4b814f24e09426f6f6e436f696e";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
    const total = 77_777_777_777;

    const donationRaw = await fetcher.getAmountInAddresses(BOON, [
        "addr1qy6up60du0r2rufjwsrf457jyssm9xnsysmgaqq934pf9gyv7h2adx0trglt75d4m0uaccftfnekt54fm9lxldfantjqyrejes",
    ]);

    const farmingRaw = await fetcher.getAmountInAddresses(BOON, [
        "addr1q8wvyukwhvykzv3tc039wyj7udygg983daz673lemq7d6h9r3vsw8l62684wlvtzrsxm27hmhl7y9ulsruaxtvmuclcqw544l5",
    ]);

    const liquidityPoolRaw = await fetcher.getAmountInAddresses(BOON, [
        "addr1qxulpxynvfzxak6t6s3483f4wzq45vqssy50s378wg4g7dlq5udt9geu2937fcpfej9m4tk72y7v8ajqka9uayrp9sdq6gkwcy",
    ]);

    const marketingRaw = await fetcher.getAmountInAddresses(BOON, [
        "addr1qyn3efzf9hmxx7ep3d4mmuu7mkgthpgxfj5t5t7ws86yj6cdr6e7utkyhethe4rylepdlf7983dwwd3ge6zpcervvdasjys8tg",
    ]);

    const presaleRaw = await fetcher.getAmountInAddresses(BOON, [
        "addr1q9cej5hv7ayne342eee3yef3zlkaxaglx2upy0r0505xmlshuewv0v8ud8ncya6uarc7vekx0260tyfrgtr272032lrqj4g88j",
    ]);

    const reserveRaw = await fetcher.getAmountInAddresses(BOON, [
        "addr1qx9z7ldyrsqxx5alw8n4cpsy2q464fud62wuwqudrk5k0k7apqpv3s6z9h8we5svv6d806p9ed6yzjtt07kq6m6t6c8qzy9zcd",
    ]);

    const giveawayRaw = await fetcher.getAmountInAddresses(BOON, [
        "addr1qx62z87cxhxvcdmkd8qraw2fswva740msqgp3nw9peu62pgz0jyzekf0xrewx2u8rfakpfty7hdp5vttsmgmg0lzhfaspua7vx",
    ]);

    const donation = Number(donationRaw);
    const farming = Number(farmingRaw);
    const liquidityPool = Number(liquidityPoolRaw);
    const marketing = Number(marketingRaw);
    const presale = Number(presaleRaw);
    const reserve = Number(reserveRaw);
    const giveaway = Number(giveawayRaw);

    return {
        circulating: (
            total -
            donation -
            farming -
            liquidityPool -
            marketing -
            presale -
            reserve -
            giveaway
        ).toString(),
        total: total.toString(),
    };
};

export default fetcher;
