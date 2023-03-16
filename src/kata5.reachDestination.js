const reachDestination = (distance, speed) => {
  const time = distance / speed
  const estimatedTime = Math.round(time * 2) / 2
  return `I should be there in ${estimatedTime} hours.`;
};
module.exports = reachDestination;
