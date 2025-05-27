//文字列を逆順にする関数
export function ReverseString(string) {
  //文字列を配列に変換
  const splitString = string.split("");
  //配列を反転
  const reverseArray = splitString.reverse();
  //配列を結合して文字列に
  const result = reverseArray.join("");

  return result;
}

//引数で文字列を入れて関数を呼び出し
console.log(ReverseString("hello"));
