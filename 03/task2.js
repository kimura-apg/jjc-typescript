function reverseString1(string) {
  //   const splitString = string.split("");
  //   const reversArray = splitString.reverse();
  //   const result = reversArray.join("");

  console.log(string.split("").reverse().join(""));
}

function reverseString2(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString2(str.substring(1)) + str.charAt(0);
  }
}
//1: ello h
//2: lloh l
//3: lohl l
//4: ohll e
//5: ohlle

// reverseString1("hello");
console.log(reverseString2("hello"));

// 結果： olleh
