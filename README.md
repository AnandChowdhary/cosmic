# 🌌 Cosmic

Find and load configuration for your app, based on [cosmiconfig](https://github.com/davidtheclark/cosmiconfig#explorersearch), with fallback to environment variables.

[![Node CI](https://img.shields.io/github/workflow/status/AnandChowdhary/cosmic/Node%20CI?label=GitHub%20CI&logo=github)](https://github.com/AnandChowdhary/cosmic/actions)
[![Travis CI](https://img.shields.io/travis/AnandChowdhary/cosmic?label=Travis%20CI&logo=travis%20ci&logoColor=%23fff)](https://travis-ci.org/AnandChowdhary/cosmic)
[![Coverage](https://coveralls.io/repos/github/AnandChowdhary/cosmic/badge.svg?branch=master&v=2)](https://coveralls.io/github/AnandChowdhary/cosmic?branch=master)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@anandchowdhary/cosmic)](https://libraries.io/npm/@anandchowdhary%2Fcosmic)
[![License](https://img.shields.io/npm/l/@anandchowdhary/cosmic)](https://github.com/AnandChowdhary/cosmic/blob/master/LICENSE)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@anandchowdhary/cosmic.svg)](https://snyk.io/test/npm/@anandchowdhary/cosmic)
[![Based on Node.ts](https://img.shields.io/badge/based%20on-node.ts-brightgreen)](https://github.com/AnandChowdhary/node.ts)
[![npm type definitions](https://img.shields.io/npm/types/@anandchowdhary/cosmic.svg)](https://unpkg.com/browse/@anandchowdhary/cosmic/dist/index.d.ts)
[![npm package](https://img.shields.io/npm/v/@anandchowdhary/cosmic.svg)](https://www.npmjs.com/package/node.ts)
[![npm downloads](https://img.shields.io/npm/dw/@anandchowdhary/cosmic)](https://www.npmjs.com/package/node.ts)
[![Contributors](https://img.shields.io/github/contributors/AnandChowdhary/cosmic)](https://github.com/AnandChowdhary/cosmic/graphs/contributors)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![npm](https://nodei.co/npm/@anandchowdhary/cosmic.png)](https://www.npmjs.com/package/@anandchowdhary/cosmic)

## ⭐ Features

Cosmic, like [cosmiconfig](https://github.com/davidtheclark/cosmiconfig#explorersearch), will look for a configuration file:

- a `package.json` property
- a JSON or YAML, extensionless "rc file"
- an "rc file" with the extensions .json, .yaml, .yml, or .js.
- a .config.js CommonJS module

For example, if the app name is "cosmic", these files will be searched:

- a cosmic property in `package.json`
- a `.cosmicrc` file in JSON or YAML format
- a `.cosmicrc.json` file
- a `.cosmicrc.yaml`, `.cosmicrc.yml`, or `.cosmicrc.js` file
- a `cosmic.config.js` file exporting a JS object

Apart from these, it also looks for:

- a `cosmic.yaml`, `cosmic.yml`, or `cosmic.js` file without "rc"
- Environment variables

## 💡 Usage

Install the package from [npm](https://www.npmjs.com/package/@anandchowdhary/cosmic):

```bash
npm install @anandchowdhary/cosmic
```

Import and use:

```ts
import { cosmic } from "@anandchowdhary/cosmic";

const config = await cosmic("project"); // {}
```

Use the `config` function to fetch a value:

```ts
import { cosmic, config } from "@anandchowdhary/cosmic";

await cosmic("project");
const environment = config("nodeEnv");
```

Clear the cache and fetch configuration available:

```ts
import { clearCosmicCache } from "@anandchowdhary/cosmic";

clearCosmicCache();
```

Sync functions are also available:

```ts
import { cosmicSync } from "@anandchowdhary/cosmic";

const config = cosmicSync("project"); // {}
```

## 👩‍💻 Development

Build TypeScript:

```bash
npm run build
```

Run unit tests and view coverage:

```bash
npm run test-without-reporting
```

## 📄 License

[MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com)
