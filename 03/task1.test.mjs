//ESモジュールの書き方
import test from "node:test";
import assert from "node:assert";
/*
//.jsの書き方
const test = require("node:test");
const assert = require("node:assert");
*/

//重複排除関数をインポート
import { Deduplication } from "./task1.mjs";

test("テスト", (t) => {
  // a == b
  assert.equal(1, 1);
  // a === b
  assert.strictEqual(1, 1);
});

test("重複排除関数のテスト", (t) => {
  // 想定（1,2,3,4,5）
  const funcResult1 = Deduplication([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
  // 想定（2,3,4）
  const funcResult2 = Deduplication([2, 2, 2, 3, 3, 4]);
  // 想定（1,5）
  const funcResult3 = Deduplication([1, 1, 1, 1, 5, 5, 5, 5]);

  assert.deepStrictEqual(funcResult1, [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(funcResult2, [2, 3, 4]);
  assert.deepStrictEqual(funcResult3, [1, 5]);
});
