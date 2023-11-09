function reverseInteger(integer) {
  //convert integer to string
  const string = integer.toString();

  //split the string into an array of characters
  const characters = string.split("");

  //reverse the order of characters
  characters.reverse();

  //convert the array of characters back to a string

  const reversedString = characters.join("");

  //parse the reversed string to an integer
  //-1 or 1
  const reversedInteger = parseInt(reversedString) * Math.sign(integer);

  return reversedInteger;
}

console.log(reverseInteger(500));
console.log(reverseInteger(-56));
console.log(reverseInteger(-90));
