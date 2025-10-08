import test from "node:test";
import assert from "node:assert";
// const test = require("node:test");
// const assert = require("node:assert");

import { removeDupulication2 } from "./task1.mjs";

removeDupulication2([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5,
  5,
]);

test("重複削除関数のテスト", (t) => {
  // 想定：[1, 2, 3, 4, 5]
  const functionResult1 = removeDupulication2([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5,
    5, 5,
  ]);
  // 想定：[0, 1, 2, 3]
  const functionResult2 = removeDupulication2([0, 0, 0, 1, 1, 1, 2, 2, 2, 3]);
  // 想定：[3, 4, 5]
  const functionResult3 = removeDupulication2([
    3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  ]);

  assert.deepStrictEqual(functionResult1, [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(functionResult2, [0, 1, 2, 3]);
  assert.deepStrictEqual(functionResult3, [3, 4, 5]);
});
