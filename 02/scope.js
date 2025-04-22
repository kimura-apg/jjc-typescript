// ブロックスコープ
{
	const constant = "123";
	var variable = "456";
}

// ブロックの外だと、値が取得できない
// console.log(constant);

// varはグローバルスコープになるため、ブロックの外でも参照ができる
console.log(variable);
