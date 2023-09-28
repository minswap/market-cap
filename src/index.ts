import aadaFetcher from "./tokens/aada";
import agcFetcher from "./tokens/agc";
import agixFetcher from "./tokens/agix";
import ashibFetcher from "./tokens/ashib";
import awooFetcher from "./tokens/awoo";
import bankFetcher from "./tokens/bank";
import bubbleFetcher from "./tokens/bubble";
import c3Fetcher from "./tokens/c3";
import cblpFetcher from "./tokens/cblp";
import chryFetcher from "./tokens/chry";
import clapFetcher from "./tokens/clap";
import clayFetcher from "./tokens/clay";
import cnetaFetcher from "./tokens/cneta";
import copiFetcher from "./tokens/copi";
import danaFetcher from "./tokens/dana";
import dgafFetcher from "./tokens/dgaf";
import dingFetcher from "./tokens/ding";
import discoFetcher from "./tokens/disco";
import djedFetcher from "./tokens/djed";
import empFetcher from "./tokens/emp";
import encsFetcher from "./tokens/encs";
import factFetcher from "./tokens/fact";
import fetFetcher from "./tokens/fet";
import flacFetcher from "./tokens/flac";
import gensFetcher from "./tokens/gens";
import gensxFetcher from "./tokens/gensx";
import geroFetcher from "./tokens/gero";
import herbFetcher from "./tokens/herb";
import huntFetcher from "./tokens/hunt";
import hoskyFetcher from "./tokens/hosky";
import iagFetcher from "./tokens/iag";
import ibtcFetcher from "./tokens/ibtc";
import iethFetcher from "./tokens/ieth";
import indyFetcher from "./tokens/indy";
import iusdFetcher from "./tokens/iusd";
import jpgFetcher from "./tokens/jpg";
import lifiFetcher from "./tokens/lifi";
import lobsterFetcher from "./tokens/lobster";
import liqwidFetcher from "./tokens/lq";
import mayzFetcher from "./tokens/mayz";
import meldFetcher from "./tokens/meld";
import milkFetcher from "./tokens/milk";
import minFetcher from "./tokens/min";
import mintFetcher from "./tokens/mint";
import mntFetcher from "./tokens/mnt";
import moaiFetcher from "./tokens/moai";
import newmFetcher from "./tokens/newm";
import ninjazFetcher from "./tokens/ninjaz";
import nmkrFetcher from "./tokens/nmkr";
import ntxFetcher from "./tokens/ntx";
import optFetcher from "./tokens/opt";
import paviaFetcher from "./tokens/pavia";
import pepeblueFetcher from "./tokens/pepeblue";
import prsprFetcher from "./tokens/prspr";
import rjvFetcher from "./tokens/rjv";
import shenFetcher from "./tokens/shen";
import snekFetcher from "./tokens/snek";
import snowFetcher from "./tokens/snow";
import societyFetcher from "./tokens/society";
import stableFetcher from "./tokens/stable";
import sundaeFetcher from "./tokens/sundae";
import utilFetcher from "./tokens/util";
import vnmFetcher from "./tokens/vnm";
import vyfiFetcher from "./tokens/vyfi";
import wmtFetcher from "./tokens/wmt";
import wozFetcher from "./tokens/woz";
import wrtFetcher from "./tokens/wrt";
import xvyfiFetcher from "./tokens/xvyfi";
import yummiFetcher from "./tokens/yummi";
import { SupplyFetcher } from "./types";

export * from "./types";

export const supplyFetchers: Record<string, SupplyFetcher> = {
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e": minFetcher,
  f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc53541474958: agixFetcher,
  edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e993444794e5458: ntxFetcher,
  "8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa4d494c4b":
    milkFetcher,
  da8c30857834c6ae7203935b89278c532b3995245295456f993e1d244c51: liqwidFetcher,
  "6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d104d454c44":
    meldFetcher,
  "9a9693a9a37912a5097918f97918d15240c92ab729a0b7c4aa144d7753554e444145":
    sundaeFetcher,
  "8fef2d34078659493ce161a6c7fba4b56afefa8535296a5743f6958741414441":
    aadaFetcher,
  "75fcc276057db5fc48eae0e11453c773c8a54604c3086bf9d95ac1b743485259":
    chryFetcher,
  db30c7905f598ed0154de14f970de0f61f0cb3943ed82c891968480a434c4150: clapFetcher,
  "5612bee388219c1b76fd527ed0fa5aa1d28652838bcab4ee4ee63197446973636f696e":
    discoFetcher,
  b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441:
    cnetaFetcher,
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e74":
    mintFetcher,
  "95a427e384527065f2f8946f5e86320d0117839a5e98ea2c0b55fb0048554e54":
    huntFetcher,
  "1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e776f726c646d6f62696c65746f6b656e":
    wmtFetcher,
  c88bbd1848db5ea665b1fffbefba86e8dcd723b5085348e8a8d2260f44414e41: danaFetcher,
  "884892bcdc360bcef87d6b3f806e7f9cd5ac30d999d49970e7a903ae5041564941":
    paviaFetcher,
  b6a7467ea1deb012808ef4e87b5ff371e85f7142d7b356a40d9b42a0436f726e75636f70696173205b76696120436861696e506f72742e696f5d:
    copiFetcher,
  "804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f56594649":
    vyfiFetcher,
  a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235484f534b59:
    hoskyFetcher,
  "815418a1b078a259e678ecccc9d7eac7648d10b88f6f75ce2db8a25aa": fetFetcher,
  dda5fdb1002f7389b33e036b6afee82a8189becb6cba852e8b79b4fb0014df1047454e53:
    gensFetcher,
  fbae99b8679369079a7f6f0da14a2cf1c2d6bfd3afdf3a96a64ab67a0014df1047454e5358:
    gensxFetcher,
  "10a49b996e2402269af553a8a96fb8eb90d79e9eca79e2b4223057b64745524f":
    geroFetcher,
  "8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a434841524c4933":
    c3Fetcher,
  "078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec92479756d6d69":
    yummiFetcher,
  "482fb00dc32186a4c587dca2df3c7cf2bc455332ab581d51967306e14d4f4149":
    moaiFetcher,
  "5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147": iagFetcher,
  "533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459":
    indyFetcher,
  "6c8642400e8437f737eb86df0fc8a8437c760f48592b1ba8f5767e81456d706f7761":
    empFetcher,
  "9abf0afd2f236a19f2842d502d0450cbcd9c79f123a9708f96fd9b96454e4353":
    encsFetcher,
  "5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc928434894e4d4b52":
    nmkrFetcher,
  "52489ea87bbceaf6375cc22f74c19382a3d5da3f8b9b15d2537044b95052535052":
    prsprFetcher,
  e5602dec7811774ee560859292c20c3694a19d5daf72ccd94fc1a18d414743: agcFetcher,
  ce5b9e0f8a88255b65f2e4d065c6e716e9fa9a8a86dfb86423dd1ac044494e47: dingFetcher,
  "8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a534e4f57":
    snowFetcher,
  "32bc130691066340caf48ef53d52c684a0e497ffc935d2fd6741efe0574f5a": wozFetcher,
  "25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c534f4349455459":
    societyFetcher,
  df1d850c46d6c9d12cbf6181c35db9225a91b77c8a646b7f636f8ae40014df104e494e4a415a:
    ninjazFetcher,
  "38ad9dc3aec6a2f38e220142b9aa6ade63ebe71f65e7cc2b7d8a8535434c4159":
    clayFetcher,
  "8cfd6893f5f6c1cc954cec1a0a1460841b74da6e7803820dde62bb78524a56": rjvFetcher,
  "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a65644d6963726f555344":
    djedFetcher,
  "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd615368656e4d6963726f555344":
    shenFetcher,
  ee0633e757fdd1423220f43688c74678abde1cead7ce265ba8a24fcd43424c50: cblpFetcher,
  "682fe60c9918842b3323c43b5144bc3d52a23bd2fb81345560d73f634e45574d":
    newmFetcher,
  bb4cfbe0f6be60b80f90f815e8353b93431de4df785d75350b9d214a48455242: herbFetcher,
  "279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f534e454b":
    snekFetcher,
  "64c3ebd40ed377989aa3069a2936e07c6ce82df46688c473d921520664676166":
    dgafFetcher,
  afc910d7a306d20c12903979d4935ae4307241d03245743548e767834153484942:
    ashibFetcher,
  f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069425443: ibtcFetcher,
  f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069455448: iethFetcher,
  f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069555344: iusdFetcher,
  "8daefa391220bd0d8d007f3748d870f7f3c106040314c8515ccc35a5464c4143":
    flacFetcher,
  "2b28c81dbba6d67e4b5a997c6be1212cba9d60d33f82444ab8b1f21842414e4b":
    bankFetcher,
  "2adf188218a66847024664f4f63939577627a56c090f679fe366c5ee535441424c45":
    stableFetcher,
  c0ee29a85b13209423b10447d3c2e6a50641a15c57770e27cb9d507357696e67526964657273:
    wrtFetcher,
  "8654e8b350e298c80d2451beb5ed80fc9eee9f38ce6b039fb8706bc34c4f4253544552":
    lobsterFetcher,
  "4fde92c2f6dbcfa2879b44f7453872b31394cfb2f70f1d4c411169ac427562626c65":
    bubbleFetcher,
  "09f5f55fcad17503e6b7acc81de7c80f84b76e76d17085f0e32f1ce241574f4f":
    awooFetcher,
  "43b07d4037f0d75ee10f9863097463fc02ff3c0b8b705ae61d9c75bf4d796e746820546f6b656e":
    mntFetcher,
  "1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be4f5054": optFetcher,
  b316f8f668aca7359ecc6073475c0c8106239bf87e05a3a1bd5697647856594649:
    xvyfiFetcher,
  "2d92af60ee429bce238d3fd9f2531b45457301d74dad1bcf3f9d1dca564e4d": vnmFetcher,
  "21abdf54f427b378fe9ba07419eff6e8e8fe0c5932e1fee2d3853b9350455045424c5545":
    pepeblueFetcher,
  "7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e4c494649":
    lifiFetcher,
  "0d90046ad35546156aaf790525133f7fc713ca2790e397784b85f5c85554494c":
    utilFetcher,
  a3931691f5c4e65d01c429e473d0dd24c51afdb6daf88e632a6c1e516f7263666178746f6b656e:
    factFetcher,
  "9e975c76508686eb2d57985dbaea7e3843767a31b4dcf4e99e5646834d41595a":
    mayzFetcher,
  "681b5d0383ac3b457e1bcc453223c90ccef26b234328f45fa10fd2764a5047": jpgFetcher,
};
