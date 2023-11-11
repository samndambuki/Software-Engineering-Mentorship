function sumNumbers(string) {
  //.split - splits the string into an array of numbers
  const numbers = string.split(",");

  //const - constants
  //let - reassingment
  //var - redeclaration and reassignmnet

  //initialize sum to 0
  let sum = 0;

  //for loop that iterates over the array of numbers
  for (const number of numbers) {
    //convert number to floating point
    sum += parseFloat(number);
  }

  return sum;
}

let result = sumNumbers("1, 2, 3");
console.log(result);

module.exports = { sumNumbers };
