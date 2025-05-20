//重複排除の関数
function Func(array) {
  const result = Array.from(new Set(array));

  return result;
}

//引数で配列を入れて関数を呼び出し
console.log(Func([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
