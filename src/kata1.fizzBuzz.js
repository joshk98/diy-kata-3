const fizzBuzz = (number) => {
  const isDivBy3 = number % 3 === 0;
  const isDivBy5 = number % 5 === 0;

  if (isDivBy5 && isDivBy3) {
    return "FizzBuzz";
  }

  if (isDivBy5) {
    return "Buzz";
  }

  if (isDivBy3) {
    return "Fizz";
  }

  return number;
};

module.exports = fizzBuzz;
