// Original array
const numbers = [2, 5, 8, 12, 15];

// using map to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);


// using filter to get numbers greater than 10
const numbersGreaterThan10 = doubledNumbers.filter(num => num > 10);
console.log("Numbers Greater Than 10:", numbersGreaterThan10);

