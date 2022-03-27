const findTheOldest = function (arr) {
  function compareYears(a, b) {
    const getYearOfDeath = (person) => {
      return person.yearOfDeath || new Date().getFullYear();
    };

    return (
      getYearOfDeath(a) - a.yearOfBirth - (getYearOfDeath(b) - b.yearOfBirth)
    );
  }

  return arr.sort(compareYears)[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
