// Mesures réalisé avec console.time()
console.time("nomPerf");
// Code à réalisé
console.timeEnd("nomPerf");

// Le temps de chaque test peu varié en fonction de multiples parametres.
//  for of
var arr = new Array(100000).fill(Math.random());
function testingForIn(arr) {
  console.time(`for/in`);
  var res = [];
  for (var i in arr) {
    res.push(arr[i]);
  }
  console.timeEnd(`for/in`);
  return res;
}
testingForIn(arr); // 20.175ms

// boucle For
var tab = new Array(100000).fill(Math.random());
function testingFor(tab) {
  console.time("for");
  var res = [];
  for (let i = 0; i < tab.length; i++) {
    res.push(tab[i]);
  }
  console.timeEnd("for");
  return res;
}
testingFor(tab); // 4.229ms

// for of
var arr = new Array(100000).fill(Math.random());
function testingForOf(arr) {
  console.time(`for/of`);
  var res = [];
  for (let i of arr) {
    res.push(i);
  }
  console.timeEnd(`for/of`);
  return res;
}
testingForOf(arr); // 6.363ms

// forEach

var arr = new Array(100000).fill(Math.random());
function testingForEach(arr) {
  console.time("forEach");
  var res = [];
  arr.forEach((value) => {
    res.push(value);
  });
  console.timeEnd("forEach");
  return res;
}
testingForEach(arr); // 3.929ms

// map
var arr = new Array(100000).fill(Math.random());
function testingMap(arr) {
  console.time("map");
  var res = arr.map(function (x) {
    return x;
  });
  console.timeEnd("map");
  return res;
}
testingMap(arr); // 6.281ms

// while

var arr = new Array(100000).fill(Math.random());
function testingWhile(arr) {
  console.time("While");
  var res = [];
  const x = arr.length;
  let i = 0;
  while (i < x) {
    res.push(arr[i]);
    i++;
  }
  console.timeEnd("While");
  return res;
}
testingWhile(arr); // 4.087ms

// do while
var arr = new Array(100000).fill(Math.random());
function testingDoWhile(arr) {
  console.time("DoWhile");
  var res = [];
  const x = arr.length;
  let i = 0;
  do {
    res.push(arr[i]);
    i++;
  } while (i < x - 1);
  console.timeEnd("DoWhile");
  return res;
}
testingDoWhile(arr); // 4.439ms
