function chooseRandomlyString(v1: string, v2: string): string {
  return Math.random() <= 0.5 ? v1 : v2;
}

const winOrLose = chooseRandomlyString("勝ち", "負け");

function chooseRandomlyNumber(v1: number, v2: number): number {
  return Math.random() <= 0.5 ? v1 : v2;
}

const num: number = chooseRandomlyNumber(1, 2);
