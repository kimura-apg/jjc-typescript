import { SomethingClass } from "./something.mjs";

const something = new SomethingClass({
  winProbability: 205 / 65536,
  description: "1/319.7",
});

something.config.winNumbers = something.generateDistributedWinNumbers(205);

console.log(something.multiDraw(1000));
