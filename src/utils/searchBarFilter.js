import { recipes } from "../data/recipes.js";
import { dispatchArraySearchRecipe } from "./dispachSearchbar.js";
import { ErrorInSearchBar } from "./reloadDOM.js";

const tempArr = [];

/**
 * Récupère les objets dont le titre correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByTitle(item) {
  tempArr.length = 0;

  recipes.filter((elt) => {
    if (elt.name.toLowerCase().includes(item)) {
      tempArr.push(elt);
    }
  });

  findByIngredient(item);
}

/**
 * Récupère les objets dont l'ingredient correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByIngredient(item) {
  recipes.forEach((elt) => {
    elt.ingredients.filter((ing) => {
      if (ing.ingredient.toLowerCase().includes(item)) {
        tempArr.push(elt);
      }
    });
  });
  findByDesc(item);
}

/**
 * Récupère les objets dont un mot correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByDesc(item) {
  recipes.filter((elt) => {
    if (elt.description.toLowerCase().includes(item)) {
      tempArr.push(elt);
    }
  });

  if (tempArr.length !== 0) {
    dispatchArraySearchRecipe(tempArr);
  } else {
    ErrorInSearchBar();
  }
}
