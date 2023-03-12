const reachDestination = (distance, speed) => {
  const roundHalf = (num) => Math.round(num * 2) / 2;
  const estimatedTime = roundHalf(distance / speed);
  return `I should be there in ${estimatedTime} hours.`;
};
module.exports = reachDestination;
