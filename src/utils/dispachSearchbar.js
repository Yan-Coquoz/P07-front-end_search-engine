import { findByTitle } from "./searchBarFilter.js";
import { reloadCard } from "./reloadDOM.js";
import { setRecipe, arrayCleaner } from "./misc.js";

export function dispatchSearchBar(evt) {
  const entry = evt.target.value.toLowerCase();
  evt.preventDefault();
  evt.stopPropagation();

  const regexTest = /[A-Zàéèç]\D/gim;

  if (entry.length >= 3) {
    if (regexTest.test(entry)) {
      findByTitle(entry);
    } else {
      // TODO les valeurs ne correspondent pas,fonction: afficher un message d'erreur
      console.log("Hors conditions");
    }
  }
}

/**
 * Dispatch le nouveau tableau des recettes
 * @param {array} array selon le titre / ingredient / description
 */
export function dispatchArraySearchRecipe(arr) {
  reloadCard(arrayCleaner(arr));
  setRecipe(arrayCleaner(arr));
}
