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
  return v % 2 === 0 ? v * 2 : v;
});

// Same map function but in ES5 I think
let newArr = arr.map((v,i,a) => {
  if (v % 2 === 0){
    return v * 2;
  } else {
    return v;
  }
});

// newArr = [1,4,3,8];