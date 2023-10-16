import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const IDP = "b9168f05e657b6946fede254e383586cf7e7a2573d5a0fa12b3ef6ac494450";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 1_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, IDP, [
    "stake1u9rdfy4p3tvje0tjvxyvhs9jdg3t7l094agmjs8ksewrtps38ylvv", // (490k) IDP Rewards Faucet
    "stake1uxjg2ux55k9nygt8s50q2wgu7vz95v4k9f3rfu8prmxkcsql3qetk", // (130m) 24-monthvesting
    "stake1u8s4y6zgraj5gf4uzww2pqydv8r5tkfmel3kux6trn46hsqxtfkvf", // (116.22m) development
    "stake1uxq6fyqc6psy6dnhdaj8dc996afkajv4qrhzewxrrahfstgzuafg8", // (90m) private investor
    "stake1uy7j4tusvnx9cns66p3te2hm0awqgux8y9hst3hvdauhfzgqnt4u9", // (90m) private investor
    "stake1uydmwjfe7a06s9wwsfuqe7zzczty73gen7zgtwq4ush7hvqaspq5v", // (86.95m) anvil platform
    "stake1u9j40ln244fzkwfu2cmn5ux08gap8pxxnc4k0gsgusje8lcdc9nmm", // (80m) development funds
    "stake1uxnn8zah4qzh8mt2ec74ntc79d320pymn8pkc2c8flmxr9q6y244x", // (80m) reserve funds
    "stake1uyvqehyphzd6z0xzv4wfwsd4qf94f2wkwc8km04gst7p0fgrdx8rl", // (70m) reserve funds
    "stake1u9u8fkp7vntew093ydyyqc6suqf0js9cdljqdp9p0xdn6vgqa2uks", // (70m) reserve funds
    "stake1uyuxqkvqwngv86g9m804kjnhmvunc52kk4kl8cm8fck5kwcjmx8sg", // (56.66m) vyfi
    "addr1vxvddtmteaa75f8fes50fld7vgsvky7x0y6anettcfvyz8ql56y42", // (21.12m) anvil staking
    "stake1uyd7dt9dudarnyykm8xa23ypvp5hll0akzddg32av9382ngk45c76", // (20m) private investor
    "stake1uy6wgc5m679vj7wc909wze9qwv0jaa40ztwh9l9htruh4zgchz8ls", // (20m) reserve funds
    "stake1u8j4m0vkqkyda3k05mftd2l7tkk2qlptkw4ap2ydqc62kdspmfd8s", // (10m) reserve funds
    "stake1u8v5u3n3487cdvjucra8d8mt82ecgpyn0zguffez0dq5kactxymgc", // (10m) reserve funds
    "stake1uxat59wnsq6zrygtkvuj0c8m58ywj3a78uq5gxn5t9yuhegsp0z7t", // (5.5m) treasury
    "stake1u9vvl59ghgte7mvg3u3e84rwxaymtj0qyv89wl3upepsnjqqtjx9w", // (5.5m)
    "stake1u9f9v0z5zzlldgx58n8tklphu8mf7h4jvp2j2gddluemnssjfnkzz", // (2.3m) minswap
  ]);
  const treasury = Number(treasuryRaw);
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
