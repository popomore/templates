#!/usr/bin/env node

import { parseArgs } from "node:util";
import { hello } from "./index.js";

const { positionals } = parseArgs({
  allowPositionals: true,
});

const name = positionals[0] ?? "world";
console.log(hello(name));
