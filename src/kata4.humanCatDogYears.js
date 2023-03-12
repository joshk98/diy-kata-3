const humanCatDogYears = (number) => {
  const toCatYears = (catNum) => {
    const firstCatYear = 15;
    const secondCatYear = 9;
    const remainingCatYear = (catNum - 2) * 4;

    if (catNum === 1) {
      return firstCatYear;
    }
    if (catNum === 2) {
      return firstCatYear + secondCatYear;
    }
    if (catNum > 2) {
      return firstCatYear + secondCatYear + remainingCatYear;
    }
    return 0;
  };

  const toDogYears = (dogNum) => {
    const firstDogYear = 15;
    const secondDogYear = 9;
    const remainingDogYear = (dogNum - 2) * 5;

    if (dogNum === 1) {
      return firstDogYear;
    }
    if (dogNum === 2) {
      return firstDogYear + secondDogYear;
    }
    if (dogNum > 2) {
      return firstDogYear + secondDogYear + remainingDogYear;
    }
    return 0;
  };

  const catYears = toCatYears(number);
  const dogYears = toDogYears(number);
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
