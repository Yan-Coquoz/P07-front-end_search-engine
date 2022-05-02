const arr = [
  "Hello 1 ",
  " Hello 2 ",
  "Hello 1 ",
  " Hello 2 ",
  "Hello 1 again",
  "Hello 1 again",
];
// supprime les doublons
// 1ere methode
const filteredArray = arr.filter(function (ele, pos) {
  return arr.indexOf(ele) == pos;
});

//2eme methode
const uniqueArr = [...new Set(arr)];

//3eme methode
const filteredarray = arr.filter((ele, pos) => arr.indexOf(ele) == pos);

// resutlat de perf JSben.ch = 1 / 3 / 2

const arr2 = [
  "string 1",
  "string 2",
  "string 3",
  "string 4",
  "string 5",
  "string 6",
];

// retourne l'index de l'élément courant
// methode 1
for (let index = 0; index < arr2.length; index++) {
  arr2.indexOf(index);
}
// methode 3
arr2.map((ele) => {
  return arr2.indexOf(ele);
});
// methode 2
arr2.forEach((ele) => {
  return arr2.indexOf(ele);
});
// methode 4
let i = 0;
while (i > arr2.length) {
  arr2.indexOf(i);
  i++;
}
//methode 5
for (let element of arr2) {
  arr2.indexOf(element);
}
// resultat de perf  JSben.ch= 4 / 1 / 2 / 5 / 3
// resultat de perf perf.link = 4 / 1 / 2 / 3 / 5
// resultat de perf jsBench.me = 4 / 1 / 2 / 3 / 5
