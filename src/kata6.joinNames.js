const joinNames = (namesObj) => {
  const namesArray = namesObj.map((person) => person.name);
  const lastName = namesArray[namesArray.length - 1];

  if (namesArray.length === 1) {
    return namesArray.join("");
  }
  if (namesArray.length === 2) {
    return namesArray.join(" & ");
  }
  return `${namesArray.slice(0, -1).join(", ")} & ${lastName}`;
};
module.exports = joinNames;
