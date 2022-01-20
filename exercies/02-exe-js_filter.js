// ONLY USE THE .filter() METHOD FOR THIS EXERCISE

//Exercise 1: Given an array of numbers, filter out the numbers that are not even, and are less than 100.
const numbers = [1, 60, 112, 123, 100, 99, 73, 35];


const newArray = numbers.filter(number => {
    return number % 2 === 1 && number < 100;
  });
  // in one line: const newArray = numbers.filter(number => number % 2 === 1 && number < 100);
  console.log(newArray); // [1,99,73,35]

// Exercise 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (i.e age > 21).
const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

const adults = people.filter(person => {
  return person.age > 21;
});

//let canConsume = adults(people)
console.log(adults) 

/* Answer should be 
[
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
]
*/

// Bonus: Using the same array above Just return the first two names of people eligible to drink. (i.e age > 21).
// might need to use a .map() here later at some point
// might also need to use another array method here which we haven't seen. Google it!, Again its a "MIGHT"
const people2 = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 49 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

const canConsumeTwo  = adults.slice(0, 2).map(person => {
  return person.name;
});

// in one line: const namesArrOfAllowedToDrink = allowedToDrink.map(person => person.name);

console.log(canConsumeTwo); 

//Answer should be ['Candice', 'Tammy']
