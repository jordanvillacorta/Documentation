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