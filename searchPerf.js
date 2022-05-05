import { recipes } from "./src/data/recipes.js";
// 1 for in
for (let ele in recipes) {
  console.log(recipes[ele].name);
}
// 2 forEach
recipes.forEach((element) => {
  return element.name;
});
// 3 map
recipes.map((element) => {
  return element.name;
});
// 4 for
for (let j = 0; j < recipes.length; j++) {
  console.log(recipes[j].name);
}

// 5 while
let ind = 0;
while (ind < recipes.length) {
  console.log(recipes[ind].name);
  ind++;
}
// 6 filter
recipes.filter((ele) => {
  return ele.time < 20;
});
// résultats jsben.ch => for / while / foreach / filter / map / for in
// résultats jsbench.js => foreach / filter / map / for / while / for in

// Doublons
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

//3eme methode, fonction fléchée
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
while (i < arr2.length) {
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
