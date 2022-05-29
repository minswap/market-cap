# Market Cap

Transparent, accurate and open-sourced circulating supply and market cap calculation for Cardano's native tokens.

## Overview

This package doesn't expose market cap by itself, but only circulating supply and total supply.

Market cap = Circulating supply \* Market price

Fully-diluted market cap = Total supply \* Market price

You can use [Blockfrost Adapter](https://github.com/minswap/blockfrost-adapter) to query market price from Minswap.

## Install

- NPM: `npm install @minswap/market-cap`
- Yarn: `yarn add @minswap/market-cap`

## Usage

```ts
import { supplyFetchers } from "@minswap/market-cap";

const minInfo = await supplyFetchers[
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e"
]();
console.log(minInfo);
// { circulating: '240813714.66121483', total: '5000000000' }
```

## How to add my token

1. Create a file in `src/tokens` with your token's name and export default a function of type `SupplyFetcher`.
2. Import the function into `src/index.ts` and add the corresponding entry in `supplyFetchers` map with the key being the concatenation of your token's policyID and assetName
3. Test your function:

```bash
# only if you use Blockfrost
export BLOCKFROST_PROJECT_ID=<your_blockfrost_key>
ONLY_TEST=<your_policy_id_concat_with_asset_name> npm test
```

4. Run format: `npm run format`

### Example

1. MIN token fetcher: [src/tokens/min.ts](src/tokens/min.ts)
2. Add entry to `index.ts`:

```ts
import minFetcher from "./tokens/min";

export const supplyFetchers: Record<string, SupplyFetcher> = {
  "29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e": minFetcher,
  ...
};
```

3. Run test:

```bash
export BLOCKFROST_PROJECT_ID=<your_blockfrost_key>
ONLY_TEST=29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c64d494e npm test
```
