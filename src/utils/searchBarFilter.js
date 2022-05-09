import { recipes } from "../data/recipes.js";
import { arrayCleaner } from "./misc.js";
import { reloadCard } from "./reloadTagDOM.js";

// 1) recherche à partir de 3 caractères
// 2) recherche dansle titre de la recette
// 3) recherche dans les ingredients
// 4) recherche dans les descriptions

const tempArr = [];
/**
 * Récupère les Objets dont le titre correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByTitle(item) {
  const titles = [];
  tempArr.length = 0;

  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].name.toLocaleLowerCase().includes(item)) {
      titles.push(recipes[index]);
    }
  }
  getOneArray(titles);
}

export function findByDesc(item) {
  const descs = [];
  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].description.toLocaleLowerCase().includes(item)) {
      descs.push(recipes[index]);
    }
  }

  getOneArray(descs);
}

export function findByIngredient(item) {
  const ingredientArrays = [];
  for (let index = 0; index < recipes.length; index++) {
    const elements = recipes[index].ingredients;
    for (let j = 0; j < elements.length; j++) {
      if (elements[j].ingredient.toLocaleLowerCase().includes(item)) {
        ingredientArrays.push(recipes[index]);
      }
    }
  }

  getOneArray(ingredientArrays);
}

/**
 * remplie un nouveau tableau avec les éléments rechercher du tableau principale
 * @param {array} array
 */
function getOneArray(array) {
  tempArr.push(...array);
  reloadCard(arrayCleaner(tempArr));
}
