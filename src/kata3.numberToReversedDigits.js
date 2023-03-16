const numberToReversedDigits = (number) => {
  const numberToString = number.toString();
  const numberArray = numberToString.split("").reverse();
  // eslint-disable-next-line radix
  const backToNumber = numberArray.map((num) => parseInt(num));

  return backToNumber;
};

module.exports = numberToReversedDigits;
