var arr = [
  "Hello 1 ",
  " Hello 2 ",
  "Hello 1 ",
  " Hello 2 ",
  "Hello 1 again",
  "Hello 1 again",
];

// 1ere methode
const filteredArray = arrTwo.filter(function (ele, pos) {
  return arr.indexOf(ele) == pos;
});

//2eme methode
var uniqueArr = [...new Set(arr)];

//3eme methode
const filteredarray = arr.filter((ele, pos) => arrTwo.indexOf(ele) == pos);

// resutlat = 1 / 3 / 2
