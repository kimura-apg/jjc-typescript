class SomethingClass {
  static MAX_RANDOM = 65536;

  constructor(config) {
    this.config = { ...config };
    this.updateWinNumbers();
  }

  updateWinNumbers() {
    const winCount = Math.round(this.MAX_RANDOM * this.config.winProbability);
    const actualProbability = winCount / SomethingClass.MAX_RANDOM;

    this.config.exactDenominator = 1 / actualProbability;
    this.config.winNumbers = this.generateDistributedWinNumbers(winCount);
  }

  generateDistributedWinNumbers(winCount) {
    if (winCount === 0) return [];
    if (winCount >= SomethingClass.MAX_RANDOM) {
      return Array.from({ length: SomethingClass.MAX_RANDOM }, (_, i) => i);
    }

    const winNumbers = [];
    const interval = SomethingClass.MAX_RANDOM / winCount;

    for (let i = 0; i < winCount; i++) {
      const winNumber = Math.floor(i * interval);
      winNumbers.push(winNumber);
    }

    return [...new Set(winNumbers)].sort((a, b) => a - b);
  }

  updateProbability(winProbability, description) {
    this.config = {
      ...this.config,
      winProbability,
      description,
    };
    this.updateWinNumbers();
  }

  draw() {
    const randomNumber = Math.floor(Math.random() * SomethingClass.MAX_RANDOM);

    return this.config.winNumbers?.includes(randomNumber) ?? false;
  }

  drawWithDetails() {
    const randomNumber = Math.floor(Math.random() * SomethingClass.MAX_RANDOM);
    const result = this.config.winNumbers?.includes(randomNumber) ?? false;

    return {
      result,
      drawnNumber: randomNumber,
      winNumbers: this.config.winNumbers ?? [],
      totalNumbers: SomethingClass.MAX_RANDOM,
    };
  }

  getCurrentConfig() {
    return { ...this.config };
  }

  getProbabilityFraction() {
    if (this.config.exactDenominator) {
      return `1/${this.config.exactDenominator.toFixed(1)}`;
    }
    const denominator = Math.round(1 / this.config.winProbability);
    return `1/${denominator}`;
  }

  getActualProbability() {
    const winCount = this.config.winNumbers?.length ?? 0;
    return winCount / SomethingClass.MAX_RANDOM;
  }

  getWinNumbersInfo() {
    const winNumbers = this.config.winNumbers ?? [];
    const actualProb = this.getActualProbability();

    return {
      count: winNumbers.length,
      distribution:
        winNumbers.length > 0
          ? `均等分散配置 (間隔: ${Math.floor(SomethingClass.MAX_RANDOM / winNumbers.length)})`
          : "なし",
      actualProbability: actualProb,
      theoreticalProbability: this.config.winProbability,
    };
  }

  multiDraw(count) {
    const results = [];
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < count; i++) {
      const result = this.draw();
      results.push(result);
      if (result) {
        wins++;
      } else {
        losses++;
      }
    }

    return { wins, losses, results };
  }

  challengeConsecutiveWins(targetConsecutive) {
    const startTime = Date.now();
    let totalTrials = 0;
    let consecutiveCount = 0;
    const finalStreak = [];

    while (consecutiveCount < targetConsecutive) {
      const result = this.draw();
      totalTrials++;

      if (result) {
        consecutiveCount++;
        finalStreak.push(true);
      } else {
        consecutiveCount = 0;
        finalStreak.length = 0;
        finalStreak.push(false);
      }

      if (finalStreak.length > targetConsecutive + 10) {
        finalStreak.splice(0, finalStreak.length - targetConsecutive - 5);
      }
    }

    const endTime = Date.now();

    return {
      totalTrials,
      consecutiveWins: consecutiveCount,
      finalStreak: finalStreak.slice(-targetConsecutive),
      timeElapsed: endTime - startTime,
    };
  }
}

export { SomethingClass };
