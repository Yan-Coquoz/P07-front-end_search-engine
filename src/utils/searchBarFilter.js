import { recipes } from "../data/recipes.js";
import { dispatchArraySearchRecipe } from "./dispatch/dispachSearchbar.js";
import { arrayCleaner, presentTags } from "./misc.js";
import { ErrorInSearchBar } from "./reloadDOM.js";

const tempArr = [];

/**
 * Récupère les Objets dont le titre correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByTitle(item) {
  tempArr.length = 0;

  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].name.toLocaleLowerCase().includes(item)) {
      tempArr.push(recipes[index]);
    }
  }
  findByIngredient(item);
}

/**
 * Récupère les Objets dont le titre correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByIngredient(item) {
  for (let index = 0; index < recipes.length; index++) {
    const elements = recipes[index].ingredients;

    for (let j = 0; j < elements.length; j++) {
      if (elements[j].ingredient.toLowerCase().includes(item)) {
        tempArr.push(recipes[index]);
        // garantit la prise en compte de la searchBar
        if (elements[j].ingredient.toLowerCase() === item) {
          presentTags.push(item);
        }
      }
    }
  }
  arrayCleaner(presentTags);
  findByDesc(item);
}

/**
 * Récupère les Objets dont le titre correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByDesc(item) {
  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].description.toLocaleLowerCase().includes(item)) {
      tempArr.push(recipes[index]);
    }
  }
  if (tempArr.length !== 0) {
    dispatchArraySearchRecipe(tempArr);
  } else {
    ErrorInSearchBar();
  }
}
