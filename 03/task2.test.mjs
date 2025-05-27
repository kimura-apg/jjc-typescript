import test from "node:test";
import assert from "node:assert";

import { reverseString1 } from "./task2.mjs";

test("逆文字生成関数のテスト", (t) => {
  const functionResult1 = reverseString1("hello");
  const functionResult2 = reverseString1("hello, world!");
  const functionResult3 = reverseString1("typescript");

  assert.strictEqual(functionResult1, "olleh");
  assert.strictEqual(functionResult2, "!dlrow ,olleh");
  assert.strictEqual(functionResult3, "tpircsepyt");
});
