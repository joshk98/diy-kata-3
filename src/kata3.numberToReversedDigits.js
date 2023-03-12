const numberToReversedDigits = (number) => {
  const numberToString = number.toString();
  const numberArray = numberToString.split("").reverse();
  const backToNumber = numberArray.map(num => parseInt(num));

  return backToNumber;
};

module.exports = numberToReversedDigits;
