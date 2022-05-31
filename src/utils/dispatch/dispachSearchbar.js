import { findByTitle } from "../searchBarFilter.js";
import { reloadCard, ErrorInSearchBar } from "../reloadDOM.js";
import { setRecipe, arrayCleaner } from "../misc.js";
import { recipes } from "../../data/recipes.js";

export function dispatchSearchBar(evt) {
  const entry = evt.target.value.toLowerCase();
  evt.preventDefault();
  evt.stopPropagation();

  const regexTest = /[A-Zàéèç]\D/gim;

  if (entry.length >= 3) {
    if (regexTest.test(entry)) {
      findByTitle(entry);
    } else {
      ErrorInSearchBar();
    }
  } else if (entry.length === 0) {
    reloadCard(recipes);
  }
}

/**
 * Dispatch le nouveau tableau des recettes
 * @param {array} array selon le titre / ingredient / description
 */
export function dispatchArraySearchRecipe(arr) {
  setRecipe(arrayCleaner(arr));
  reloadCard(arrayCleaner(arr));
}
