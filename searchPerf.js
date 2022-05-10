import { recipes } from "./src/data/recipes.js";
// 6 filter
recipes.filter((ele) => {
  return ele.name;
});
// 1 for in
for (let ele in recipes) {
  const value = recipes[ele].name;
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
  const v = recipes[j].name;
}
// 5 while
let ind = 0;
while (ind < recipes.length) {
  const val = recipes[ind].name;
  ind++;
}
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
const filteredArray = arr.filter(function (item, next) {
  return arr.indexOf(item) == next;
});

//2eme methode
const uniqueArr = [...new Set(arr)];

//3eme methode, fonction fléchée
const filteredarray = arr.filter((item, next) => arr.indexOf(item) == next);

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

// tri à bulle
function bubbleSort(items) {
  const tab = items.length;
  for (let ind_ = 0; ind_ < tab; ind_++) {
    for (let j = 0; j < tab - ind_ - 1; j++) {
      if (items[j] > items[j + 1]) {
        let tmp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = tmp;
      }
    }
  }
}

const arri = [5, 4, 3, 2, 1, 9, 11, 6];
bubbleSort(arri);

console.table(arri);
