"use strict";
function chooseRandomlyString(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
function chooseRandomlyNumber(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
function chooseRandomly(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
const generics = chooseRandomly(1, 2);
const arrayGenerics = [1, 2, "test"];
console.log("");
