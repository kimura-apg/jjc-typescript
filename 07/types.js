"use strict";
/** boolean　論理型 */
const isOk = true;
/** number 数値型 */
const int = 10000;
const negativeInt = -10000;
const double = 1.1;
// 1,000,000,000
const billion = 1000000000;
const hexadecimal = 0x100;
const binary = 0b1111111111111111;
function inputString(a) { }
// toString()で、文字列型に変換 "10000"
inputString(int.toString());
// Infinityが返される
console.log(1 / 0);
/** string 文字列型 */
const dobuleQuote = "test";
const templateLiteral = `hello, ${dobuleQuote}`;
const escapeString = 'doubleQuote -> ""';
const combinedString = dobuleQuote + templateLiteral;
/** null, undefined 無、未定義 */
let undefinedString = undefined;
let nullString = null;
undefinedString = "update!";
nullString = "update!";
function optionalReturn(a) {
    if (a === "1") {
        return a;
    }
    else {
        return null;
    }
}
/** symbol シンボル */
const testSymbol = Symbol("123123");
const duplicate = testSymbol;
const sampleString = "123123";
// "123123"
console.log(testSymbol);
console.log(testSymbol === duplicate);
/** bigint */
let testBigInt = 99999999999999999999999999999999n;
/** object オブジェクト */
let testObject2 = {
    name: "test",
    age: 12,
    obejct: {
        child: true,
    },
};
/** array 配列 */
const testArray = [1, 2, 3, "test", { test: "tes" }, false];
