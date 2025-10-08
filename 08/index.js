"use strict";
function chooseRandomlyString(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
const winOrLose = chooseRandomlyString("勝ち", "負け");
function chooseRandomlyNumber(v1, v2) {
    return Math.random() <= 0.5 ? v1 : v2;
}
const num = chooseRandomlyNumber(1, 2);
