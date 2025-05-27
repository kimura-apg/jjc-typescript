//重複排除の関数
export function Deduplication(array) {
  const result = Array.from(new Set(array));

  return result;
}

//引数で配列を入れて関数を呼び出し
console.log(Deduplication([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
