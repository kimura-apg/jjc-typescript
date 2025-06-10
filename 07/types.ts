/** boolean　論理型 */
const isOk: boolean = true;

/** number 数値型 */
const int: number = 10000;
const negativeInt: number = -10000;
const double: number = 1.1;
// 1,000,000,000
const billion: number = 1_000_000_000;
const hexadecimal: number = 0x100;
const binary: number = 0b1111111111111111;

function inputString(a: string) {}
// toString()で、文字列型に変換 "10000"
inputString(int.toString());

// Infinityが返される
console.log(1 / 0);

/** string 文字列型 */
const dobuleQuote: string = "test";
const templateLiteral = `hello, ${dobuleQuote}`;
const escapeString = 'doubleQuote -> ""';
const combinedString = dobuleQuote + templateLiteral;

/** null, undefined 無、未定義 */
let undefinedString: string | undefined = undefined;
let nullString: string | null = null;

undefinedString = "update!";
nullString = "update!";

function optionalReturn(a: string) {
  if (a === "1") {
    return a;
  } else {
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
let testObject2: testObjectType = {
  name: "test",
  age: 12,
  obejct: {
    child: true,
  },
};

type testObjectType = {
  name: string;
  age: number;
  obejct: {
    child: boolean;
  };
};

/** array 配列 */
const testArray = [1, 2, 3, "test", { test: "tes" }, false];
