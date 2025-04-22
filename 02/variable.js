/**
 * 定数
 */
const literalConstant = "123";
const objectConstant = {
	stringProperty: "string",
	numberProperty: 123,
	objectProperty: {
		stringProperty: "string",
		numberProperty: 123,
	},
};

// 初期値は必ず必要です
// const constant;

// objectConstantの変更前
console.log("Original stringProperty: ", objectConstant.stringProperty);

// 上書きはできません
// literalConstant = 123;

// オブジェクトの場合は、プロパティの変更が可能です
objectConstant.stringProperty = "newString";
console.log("Updated stringProperty: ", objectConstant.stringProperty);

delete objectConstant.numberProperty;
console.log("Deleted numberProperty: ", objectConstant.numberProperty);

/**
 * 変数
 */
let stringVariable = "123";
let variable;

var numberVariable = 123;
var variable2;

// 宣言文より前では、値は参照できません。
// console.log(variable3);
// let variable3 = "456";

// 宣言文より前でも、値を参照できます。
// ただし、宣言文より前に参照した場合、undefinedが返ります。
console.log(variable4);
var variable4 = "789";
