import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const BOOK = "51a5e236c4de3af2b8020442e2a26f454fda3b04cb621c1294a0ef34424f4f4b";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 10_000_000_000;
  const treasuryRaw = await getAmountInAddresses(blockFrost, BOOK, [
    "addr1v8dyqna76l9uh3sg93hvp8h40c8h0ecsw0yfa5dtq5hgvzc5572e2", // swap send in
    "addr1w99gfdcmxwe2ahe9ncjekntn2fhcpusj55874g4m7f4c7kqy3rq23", // swap contract
    "addr1w9223trzcvg75wwlaeprls9zwcf8nu8l5y92t9kk2all2jqk6sg93", // lock contract

    "addr1v85pply2a5dgxg220ymw3qsg6h478vjeymppexpsvdpzqtcfarzsy", // read to earn
    "addr1vyed0f2pcau4ww4yjqx4r53jqf3fy9sfahc57g7ucqxrcecrp4tg0", // dex liquidity and yield farming rewards
    "addr1v8gnwyfxh2w7lmn6vau92gura99cs9rhxhvr4l8nprz8s5qhlk9ed", // stake pool
    "addr1v89mtmf0gfqde8lfuzrssmucupkx7zj2uy9kht3eaa3cp7s773n2z", // gutenberg holders
    "addr1v8glyfdnwewtt586yvmpg27zjm6v7ld3yxau5jtugtzzhkq2n9pgc", // golden bookmark
    "addr1vx558m3dchudjts98lhw7sxpx996f535gkwexvn5tp0t3js38kk50", // development
    "addr1qyd4t3x5qamsx4r3cl5g3g3tcszt4pu5dgjmr60aq49f3grnc4w68hnhujsck75s8786g80r22360tg6wde5059dyz6qqlkfxf", // team/advisors/acquisitions
    "addr1q9n9u7vrx3djcrfttqrjrykwq4h4hl2juc5q8k6sgrz2lhzl5t9hr2rvlpr5570cp68uxd22p5znf272k6xr9tjsymksk9gfvx", // team/advisors/acquisitions
    "addr1qxguf5zz8xtqmyry3yhdprv7pdzmz3wzva8ufq8gqr75p3ckryawmhegrmnns8n9rc8y57hd69zdcw9d5h67halc7yjsx5f9q4", // team/advisors/acquisitions
    "addr1qxqnnluhshygqz8rpntn6fa5sx6mwsp7vjxds33y9fat937kev0y8r4tqcpytfqxp2sknmg8fg8q6kh0svl2atqv8zzqyehzr6", // team/advisors/acquisitions
    "addr1q8075t4lwt7jpydc9v9580anahz0thl2vgupw890j3ulysqxwwqxj7vset2kvmy35asxvsc4l5ccvly8zk0fuaaqzkrqd8ty50", // team/advisors/acquisitions
    "addr1q98gx2xaxmf2gf2ueg2r82gsdsev5xdkthj59cu2zjc67jrxet6c2ndv8t5z0ug5msx773zctdtk42kz6mp7ndn0rq7s7gaavl", // team/advisors/acquisitions
    "addr1q9d9myshfke89xg7z3nnuaww5rms80742f5926knaft6cxax65slzfklzp75lap2xpepcs4pxhsueu2ks4y6aw7dzcts7ndxsm", // team/advisors/acquisitions
    "addr1q805nrf5t4ys6y0rzk03ugqq0r32vdmtmy9kc5hw3h8s0fem6g3tshpxayjea39pwz8dhh96mfmxm04tjhk5d2aqmqnsl22d7j", // team/advisors/acquisitions
    "addr1q8a47z8939gkmj0kn09qa8x8wmrtu8ugptsh364lqfdrt4zhs83nyn5prn69fc86jwwxp8l7l3pynw7g8cc2def0lm6qm6ndua", // team/advisors/acquisitions
    "addr1q8nhwv2hwaryhx97s8mxyvp2yakqc9hg2q53zvydxgru7cjj84uwe7rjgy09cdkctwtcgz0w7n2d8arwghtrhdrxalnsznrdpa", // team/advisors/acquisitions
    "addr1q9y0serxlmfsw69sxjynj0n6malusru2pxxkgclzwjamaflqt67ea0tfpnhv0hrggk06242523htku26kphguckkudssyw04fr", // team/advisors/acquisitions
    "addr1qxj8xau5yfwhcdhx8a276287u4a0mjc4knd9j34xhlrd76k27xhqm65w99zj9hfga94netnradw30prqhve02reyg7eshy4t8a", // team/advisors/acquisitions
    "addr1q8msla2eepmpaaqwfcpzfks5jm3ehd4mxmz32hzu0cnsgpg3cps4hhtpkad09vgmzuhnfugueleu46wcrpdg77kx7xcqqxhr6a", // team/advisors/acquisitions
    "addr1qylj435sz0x2xryyxyw0fwu9psu9r24kmy4kjsdcxm9zkjm65lxnw854aqcyhvfr6ayrh02w600cp0vkx5fvryc47gzsqdfcym", // team/advisors/acquisitions
    "addr1q8sexqde0aae4emlrgjjazcwewvp0z2j68p036hyyxdpp5vrav3lw4l9aj3kx4f343fqwkmkz7z2g45sd7afy4f8a94sfvxva7", // team/advisors/acquisitions
    "addr1qx2cs53uqcmzfszdx2llxnae9rk62vxsm6x8jfcjf4q0cd52xv6hxssfxq8su48w562k6z07hvkh23cqtwthh6fc4yfqr6vvm5", // team/advisors/acquisitions
    "addr1q97flaukflfthzmkvasy48763mul2tl0wl27z9d8s87u6ta46ftf3uugu0d84ugthq0gsnwj2ufjsr530l0z7s0kmctqmcqknz", // team/advisors/acquisitions
    "addr1q8dtp9vm5x59djn6dy0cxp5ryyl4lfqc8e30tqlh82zamlsn5wxc0nw54ly9c8vsqpgfsag50k6ur90qsc7460md246s6u2y68", // team/advisors/acquisitions
    "addr1q9f4cktcvtmd46vw0u2qh98ufxqdmu8tn60revk9qrs5ll5ed0utsun3pqh3s3rk0fzf8q3j4adqc0tw09rtsxex9hls2y0j83", // team/advisors/acquisitions
    "addr1qxjl6hzk5392sdwr72zl9w63kxdj4kxkskpuuj6tvp236rrt9cpa59g500vxafypnsn7yrvu5l6um0n0ej5vm3zsxats3mmk6s", // team/advisors/acquisitions
    "addr1q83fkut3pac3tf0hajxlc2jdcymxf40rtd42ysrc8d2yy94j67pfw6rqpg4lgawkpfcjp5wq2zdhyq4744ytge7l94vs2qp8sj", // team/advisors/acquisitions
    "addr1q9aqrgkcqyelwpal2rx894ksyprcj8rhuf3q7qqmgee7ayxjre8zd858mj5wm5mvvs8szz25u55emty5w8xzt2k42jfqp7q4tp", // team/advisors/acquisitions
    "addr1q8xrzd9fd6z72pe2z8crejyuwl6d5vmvmql86pwapqylx8glfch5uw7k5uqn9tqz24g4l03nd5n326z699qfsn7f4nas6hk96v", // team/advisors/acquisitions
    "addr1q9azgqe5mjp5yrjapak2uf0nsnulw5c4qjpw2mn37hj93cm5fauhyvq05ev39gfaasd6van8puwegjwcud2fqkfwh4yqv5tmx4", // team/advisors/acquisitions
    "addr1q8fx9llhx7xegk4nh0q0jwl2pp56xq7jhzg0yg3t289yaj0ytlg86at6sv36tmp27lyzgltn9p24xhkcrf9zvaqq0a8s5583kn", // team/advisors/acquisitions
    "addr1q8qkgyet9n6xlrm5u9v9e29a642ah2gw6d2lcn527smffvpyd27al8h22yz7mp6qf87c436u4uael6cs4w7m7v00pc9qw5llpf", // team/advisors/acquisitions
    "addr1q8mpn9h0xapy6x9c5m5tq0a7gumgmvs7wql7wsh475ya0a50q4vxqy3gndjh9ma7sxqxcapylsj5se9w374sc3h3yntq5pg68r", // team/advisors/acquisitions
    "addr1qxn04nsknfk0kxe27ngegpu054maysa2v496ujvrq27f09uurm9fpjuxfzn3yet45hse845zrq8jc3ynxkxrsk3pewxs45rcvc", // team/advisors/acquisitions
    "addr1qy96mjcmm02sc9ph3l2h07ltpergzk70me6lqq59elw0u6uadvfmyyyuhvcvta2s923vu0rqwcs48ulsawxecw3svzjsky7jvt", // team/advisors/acquisitions
    "addr1qx7a44j40rjtvdn2qp4e7mytrdx7jzw9eum8qhgc5u4deu00gad2k2mgfs9lf0p8tntxxj649p76yfvepr8vfpnfec0syxre82", // team/advisors/acquisitions
    "addr1q8fuu973nmc9yj3c73pyf2s2s2efjdwdumtp2nd2q6jhkhefjvqck36nmztwy8rk0xjuxjcl79g9w2t53yml68ygc8kq7mdwr5", // team/advisors/acquisitions
    "addr1qygvlkcnpuuyr5u75janc56gnysjsfymppfdh8c4zr7kkfxl74m0c90qhyl8j2ypqpp439uuwm3pyngtut40e4qx63us7x9p3p", // team/advisors/acquisitions
    "addr1qxfe7jrsp0g97m923z6h8dap83v08c3vx3ly9h3mx6cns7axc3y57fyyr4pmqfuyprhgaf97gg9uha30ctjemctc4mtqrf8pk5", // team/advisors/acquisitions
    "addr1qywdsxk3vzp9w54k3smkm7clulqtrykx7ptjenu4smhhye3e7gnk3tadpntcjzhjmdeeapskqrh8nh7cfeug8959xcaskck5qu", // team/advisors/acquisitions
    "addr1qxdy54wmmw7pv3qw2hw05m66nnkul8dcm97la6nk9a4xjja2s83txrpnln3awzlxyzf2kj4yc2l0t8wxqpdq3gaaerds7a82zw", // team/advisors/acquisitions
    "addr1q8c8dsfa7fntaag9tnm7g30cz6p7twwawvmazckh4puqmgukx32t4hkkvms067kqsgwz7m388x9raugqpavy9hlmz34scs2vqg", // team/advisors/acquisitions
  ]);

  const treasury = Number(treasuryRaw) / 1e6;

  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
