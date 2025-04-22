/**
 * 分割代入
 */
const testArray = [1, 2, 3, 4, 5];

// 配列の分割代入
const [a, b] = testArray;

console.log(a);
console.log(b);

/**
 * スプレッド構文
 */
// ...arg とすることで、あまりの引数を配列として受け取ることができます
const [c, ...rest] = testArray;

console.log(c);
console.log(rest);

// もしくは、...argを使用することで、配列を展開することもできます
const testArray2 = [6, ...testArray];

console.log(testArray2);

/**
 * 配列に使えるメソッド
 */
const testArray3 = [1, 2, 3, 4, 5];

// map
// mapメソッドは、配列の各要素に対して関数を適用し、新しい配列を生成します
const mappedArray = testArray3.map((item) => item * 2);
console.log(mappedArray);

// filter
// filterメソッドは、条件を満たす要素だけを抽出して新しい配列を生成します
const filteredArray = testArray3.filter((item) => item > 2);
console.log(filteredArray);

// reduce
// reduceメソッドは、配列の各要素を累積して1つの値を生成します
const reducedValue = testArray3.reduce(
	(previousValue, currentValue) => previousValue + currentValue,
	0,
);
console.log(reducedValue);
