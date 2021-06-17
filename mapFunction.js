let newArr = arr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

// This will create an array of objects for us within our newArr:

arr = [1,2,3,4];
newArr = [
  {value: 1, index: 0},
  {value: 2, index: 1},
  {value: 3, index: 2},
  {value: 4, index: 3}
]

// In this example we have a simple array:

let arr = [1,2,3,4];

// We want to double the even numbers and leave the odd numbers the same. In order to accomplish this, we can add logic within our map() function:

let newArr = arr.map((v,i,a) => {
  return (v % 2 === 0) ? v * 2 : v;
});

// Same map function but in ES5 I think
let newArr = arr.map((v,i,a) => {
  if (v % 2 === 0) {
    return v * 2;
  } else {
    return v;
  }
});

newArr = [1,4,3,8];

// Isaac's Problem
  // Given a list of objects, validate that every object has a caffeine and cupsDrank
  // If it does not have a caffeine, set the value to 0.
  // If it does not have cupsDrank, set the value to 1.

  // Stretch Goal: If it does not have a customerName, generate a randomString that is 10 characters long
  // and set it to the result of the randomString. (a method to call)

let coffeeCounter = [
  {caffeine: 100, cupsDrank: 2},
  {caffeine: 255},
  {customerName: 'Bob'},
  {cupsDrank: 2},
  {caffeine: 40, cupsDrank: 25}
]

let arrayFromTheMap = coffeeCounter.map(customer => {
  (customer.caffeine === undefined) ? customer.caffeine = 0 : null;
  (customer.cupsDrank === undefined) ? customer.cupsDrank = 1 : null;
    return customer
  }
)
console.log(arrayFromTheMap)

// whatever is returned in the scope of the map, will then be added to the new array that the map is creating
