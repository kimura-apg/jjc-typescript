function removeDupulication1(array) {
  const result = [];

  array.forEach((item) => {
    const isExist = result.includes(item);
    console.log(isExist);

    if (!isExist) {
      result.push(item);
    }
  });

  return result;
}
console.log(
  removeDupulication1([1, 1, 1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5])
);
// 結果：[1, 2, 3, 4, 5]

// aa
