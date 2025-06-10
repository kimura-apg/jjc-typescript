import { SomethingClass } from "./something.mjs";

const something = new SomethingClass({
  winProbability: 205 / 65536,
  description: "1/319.7",
});

something.config.winNumbers = something.generateDistributedWinNumbers(205);
something.updateWinNumbers();

// console.log(something.draw());
console.log(something.multiDraw(1000));

// camelCase
const camelCase = "";
// PascalCase
class PascaleCase {}
// snake_case
const test_string = "";
// cabeb-case
