import aadaFetcher from "./tokens/aada";
import agixFetcher from "./tokens/agix";
import clapFetcher from "./tokens/clap";
import cnetaFetcher from "./tokens/cneta";
import liqwidFetcher from "./tokens/lq";
import meldFetcher from "./tokens/meld";
import milkFetcher from "./tokens/milk";
import minFetcher from "./tokens/min";
import mintFetcher from "./tokens/mint";
import ntxFetcher from "./tokens/ntx";
import sundaeFetcher from "./tokens/sundae";
import { SupplyFetcher } from "./types";

export * from "./types"

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
  b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441:
    cnetaFetcher,
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e74": mintFetcher,
};
