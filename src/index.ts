import aadaFetcher from "./tokens/aada";
import agcFetcher from "./tokens/agc";  
import agixFetcher from "./tokens/agix";
import c3Fetcher from "./tokens/c3";    
import clapFetcher from "./tokens/clap";
import cnetaFetcher from "./tokens/cneta";
import copiFetcher from "./tokens/copi";
import danaFetcher from "./tokens/dana";
import dingFetcher from "./tokens/ding";
import discoFetcher from "./tokens/disco";
import empFetcher from "./tokens/emp";
import geroFetcher from "./tokens/gero";
import hoskyFetcher from "./tokens/hosky";
import iagFetcher from "./tokens/iag";
import indyFetcher from "./tokens/indy";
import liqwidFetcher from "./tokens/lq";
import meldFetcher from "./tokens/meld";
import milkFetcher from "./tokens/milk";
import minFetcher from "./tokens/min";
import mintFetcher from "./tokens/mint";
import nmkrFetcher from "./tokens/nmkr";
import ntxFetcher from "./tokens/ntx";
import paviaFetcher from "./tokens/pavia";
import prsprFetcher from "./tokens/prspr";
import snowFetcher from "./tokens/snow";
import sundaeFetcher from "./tokens/sundae";
import vyfiFetcher from "./tokens/vyfi";
import wmtFetcher from "./tokens/wmt";
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
  db30c7905f598ed0154de14f970de0f61f0cb3943ed82c891968480a434c4150: clapFetcher,
  "5612bee388219c1b76fd527ed0fa5aa1d28652838bcab4ee4ee63197446973636f696e":
    discoFetcher,
  b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441:
    cnetaFetcher,
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e74":
    mintFetcher,
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
  "10a49b996e2402269af553a8a96fb8eb90d79e9eca79e2b4223057b64745524f":
    geroFetcher,
  "8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a434841524c4933":
    c3Fetcher,
  "078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec92479756d6d69":
    yummiFetcher,
  "5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114494147": iagFetcher,
  "533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0494e4459":
    indyFetcher,
  "6c8642400e8437f737eb86df0fc8a8437c760f48592b1ba8f5767e81456d706f7761":
    empFetcher,
  "5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc928434894e4d4b52":
    nmkrFetcher,
  "52489ea87bbceaf6375cc22f74c19382a3d5da3f8b9b15d2537044b95052535052":
    prsprFetcher,
  e5602dec7811774ee560859292c20c3694a19d5daf72ccd94fc1a18d414743: agcFetcher,
  ce5b9e0f8a88255b65f2e4d065c6e716e9fa9a8a86dfb86423dd1ac044494e47: dingFetcher,
  "8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a534e4f57":
    snowFetcher,
};
