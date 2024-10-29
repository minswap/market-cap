import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CHIP = "30d2ebdb2fec06142ee84e5120c2717b4d68a91bffd924420d94ddea43484950";

const TREASURY_ADDRESSES = [
  "addr1qxsnhcavemjjes9u6pugq8x76y3fn59t7q590qf60c4k9j5ff8jck2uprunuc8jga6ehyywd6gahfhq8f7p03exzd2aqfh7dhq",
  "addr1qymgg5j2mczqcyzq5yzv0wdzrtqv5eh8gj88r57uj0880k5rawe7srxf4duew8uxt9qjwg2hknkwc23g2gfncmqkqatsyrtzfs",
  "addr1q8e2p26qtrz02eygsgm65d04afzfwqgn0xccq3ah6haxj4tl28ezl6703wu7fhn9hax7yyp6466hn6pnamrwjenhy4cs3hmr50",
  "addr1q8rqmar56e9t05vueh5n69gdnnnfguv9m5jtvjltc6p4zu9x6n7x0yn54ckn8qwlk75pm8ewhck8kkfd56devu2lygastz5pgq",
  "addr1q93zlwt4cxge5p8fhdczt8qwrva0vuy3h88yu3lzvs55j7lsw8u030madzgeflqhsevrzdp4nls3gd0g47nef8ffj02sa7gr0t",
  "addr1qyy86us6kfrg3rsy0nhssrlkjyq4yw8wasn0n8qgk9gqp0lz3kqj9ut6p5c4gxlg7vehhkzsyfejj0gkpyf7w6d20ffqt2et79",
];

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockfrost = getBlockFrostInstance(options);
  const total = 1.6e9;
  const treasury =
    Number(await getAmountInAddresses(blockfrost, CHIP, TREASURY_ADDRESSES)) /
    1e6;

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
