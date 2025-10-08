enum testEnum {
  notFoundError = "404",
  internalServerError = "500",
  ok = "200",
}

interface testInterface {
  name: string;
  age: number;
  location: string;
}
interface inheritInterface extends testInterface {
  test: string;
}

// interfaceよりおすすめ
type testType = {
  name: string;
  age: number;
  location: string;
};

const testInterfaceAct: inheritInterface = {
  age: 12,
  location: "test",
  name: "test",
  test: "te",
};

function testFunction(a: string, b: number) {
  const result = a + 2;
  // test = "200"
  const test = testEnum.ok;

  return result;
}

// 型定義しなくても、stringに推論される
let testString = "test";
// 型定義しなくても、numberに推論される
let testNumber = 123;
// 型定義しなくても、{ name: string, age: number }というオブジェクトに推論される
let testObject = {
  name: testString,
  age: testNumber,
};
