import { recipes } from "./src/data/recipes";
// test réaliser sur JsBench.me

// filter => 1925331817.75 ops/s
// for    => 1935914420.31 ops/s
// Les 2 options sont très rapides mais filter est le plus rapide.

// test réaliser sur JsBen.ch

// filter => 4126489 100%
// for    => 4121257 99,87%
// Les 2 options sont très rapides mais filter est le plus rapide.

//test pour les boucles For
const tempArr = [];

function findByTitle(item) {
  tempArr.length = 0;

  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].name.toLocaleLowerCase().includes(item)) {
      tempArr.push(recipes[index]);
    }
  }
  findByIngredient(item);
}
function findByIngredient(item) {
  for (let index = 0; index < recipes.length; index++) {
    const elements = recipes[index].ingredients;
    for (let j = 0; j < elements.length; j++) {
      if (elements[j].ingredient.toLocaleLowerCase().includes(item)) {
        tempArr.push(recipes[index]);
      }
    }
  }
  findByDesc(item);
}

function findByDesc(item) {
  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].description.toLocaleLowerCase().includes(item)) {
      tempArr.push(recipes[index]);
    }
  }
}

// test avec filter()
// const tempArr = [];

function ByTitle(item) {
  recipes.filter((elt) => {
    if (elt.name.toLowerCase().includes(item)) {
      tempArr.push(elt);
    }
  });
  findByIngredient(item);
}

function ByIngredient(item) {
  recipes.forEach((elt) => {
    elt.ingredients.filter((ing) => {
      if (ing.ingredient.toLowerCase().includes(item)) {
        tempArr.push(elt);
      }
    });
  });
  findByDesc(item);
}

function ByDesc(item) {
  recipes.filter((elt) => {
    if (elt.description.toLowerCase().includes(item)) {
      tempArr.push(elt);
    }
  });
}
