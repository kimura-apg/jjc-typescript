import test from "node:test";
import assert from "node:assert";
// const test = require("node:test");
// const assert = require("node:assert");

import { removeDupulication2 } from "./task1.mjs";

removeDupulication2([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5,
  5,
]);

test("テスト名", (t) => {
  // a === b
  assert.strictEqual(1, 1);
});
