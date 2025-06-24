"use strict";
var testEnum;
(function (testEnum) {
    testEnum["notFoundError"] = "404";
    testEnum["internalServerError"] = "500";
    testEnum["ok"] = "200";
})(testEnum || (testEnum = {}));
const testInterfaceAct = {
    age: 12,
    location: "test",
    name: "test",
    test: "te",
};
function testFunction(a, b) {
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
