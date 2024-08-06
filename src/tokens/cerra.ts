import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getBlockFrostInstance } from "../utils";

const CERRA = "4342a3d3c15545a592bf38294dc75c7a1dd3550388303e3a06f4416d4345525241";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const blockFrost = getBlockFrostInstance(options);
  const total = 50e6;
  const treasuryRaw = await getAmountInAddresses(blockFrost, CERRA, [
    "stake1u98g0de8y36dywtn77h29yx4vvq0enrrptj7h5duk8j054cnkx4f0",
    "stake1uxy65hljr7hfpxl0pq0vcd87ccgnlap3hsyex7u30xq5hncrlsrtc",
    "stake1uxy34uvrwarmjglnhlwhrd78enprcs2anpk9y6u590k9xwcv3wq3x",
    "stake1u8nvv344u5lf7t2m7zpc93jkx0vjax4ndljvjauvaw9ccjsn690j0",
    "stake1uy4z60a3jf05f2d4524vjguk8zel8ahumlkd8z80kdy90yqnmk88f",
    "stake1u8f9gavng935n454ydfm8qzwxcl58mymxs056kln8zhvqlggdle3x",
    "addr1w9l6mmpe5h2htkut4hgyf0tkqn3ng59dmhwx3g8wuhjdy9cd0v7wr",
    "stake1u8cja9hqxkm67aeyuw8uqudnmndua4nzpvlzdhrvejl842glyn9r8",
  ]);

  const treasury = Number(treasuryRaw)/1e6;
  return {
    circulating: (total - treasury).toString(),
    total: (total).toString(),
  };
};

export default fetcher;
