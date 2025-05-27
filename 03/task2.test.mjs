import test from "node:test";
import assert from "node:assert";

//文字列逆順関数をインポート
import { ReverseString } from "./task2.mjs";

test("文字列逆順関数のテスト", (t) => {
  // 想定（olleh）
  const funcResult1 = ReverseString("hello");
  // 想定（ikab）
  const funcResult2 = ReverseString("baki");
  // 想定（tibmagnik）
  const funcResult3 = ReverseString("kingambit");

  assert.deepStrictEqual(funcResult1, "olleh");
  assert.deepStrictEqual(funcResult2, "ikab");
  assert.deepStrictEqual(funcResult3, "tibmagnik");
});
