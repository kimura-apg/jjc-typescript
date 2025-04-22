/**
 * 関数
 */
function doubleArg(arg) {
	return arg * 2;
}

console.log(doubleArg(2));
// 関数は巻き上げが起こるため、宣言文より前でも使用ができます
console.log(tripleArg(2));

function tripleArg(arg) {
	return arg * 3;
}

/**
 * アロー関数
 */
// 式返却
const arrowFunc = (arg) => arg * 2;
console.log(arrowFunc(2));

// 文返却
const arrowFunc2 = (arg) => {
	return arg * 2;
};
console.log(arrowFunc2(2));

// コールバックとしての、無名関数
setTimeout(function () {
	console.log("Hello, World!");
}, 1000);

setTimeout(() => {
	console.log("Hello, World!");
}, 1000);

/**
 * コールバック関数
 */
function callbackFunc(callback) {
	callback();
}

callbackFunc(() => {
	console.log("Callback function executed!");
});

/**
 * 非同期関数
 */
// asyncキーワードを使用することで、非同期関数を定義できます
async function asyncFunc() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Async function executed!");
		}, 1000);
	});
}

asyncFunc().then((result) => {
	console.log(result);
});
