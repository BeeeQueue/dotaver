# `dotaver`

[![npm](https://img.shields.io/npm/v/dotaver)](https://www.npmjs.com/package/dotaver)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/dotaver)
![node-current](https://img.shields.io/node/v/dotaver)
![Codecov](https://img.shields.io/codecov/c/github/BeeeQueue/dotaver?token=XUED4J0ZY3)

Semver but for Dota 2 patch versions

## Usage

```shell
npm i dotaver
yarn add dotaver
pnpm i dotaver
```

```ts
// Node
import { DotaVersion } from "dotaver"
// Deno
import { DotaVersion } from "https://esm.sh/dotaver"

const version = DotaVersion.parse("7.36b")

console.log(version.toString()) // "7.36b"

const otherVersion = DotaVersion.parse("7.37")
console.log(version.compare(otherVersion)) // 1
```
