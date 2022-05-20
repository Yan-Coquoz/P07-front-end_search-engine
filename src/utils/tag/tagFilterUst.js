import { recipes } from "../../data/recipes.js";
import {
  cleanDropdown,
  arrayCleaner,
  arrayToDropdown,
  setRecipe,
  isSearchbarEmpty,
} from "../misc.js";

import { filteredSuggestion } from "../filter.js";
import { dispatchTagDOM } from "../dispatch/dispatchTag.js";
import { dropdownTagItemDOM, reloadCard } from "../reloadDOM.js";

/**
 * Recherche par ustensiles (input tag)
 * @param {string} element caractères venant de l'input
 * @returns {arrayOfObject}
 */
export function searchUstensile(element) {
  const allRecipes = isSearchbarEmpty() === 0 ? recipes : getRecipes();
  const recipesUstensiles = [];
  allRecipes.map((obj) => {
    return obj.ustensils.filter((item) => {
      if (item.toLowerCase().includes(element.toLowerCase())) {
        recipesUstensiles.push(obj);
      }
    });
  });
  recipesUstensiles.length === 0
    ? ErrorInTagInput()
    : filteredSuggestion("red", recipesUstensiles);
  reloadCard(arrayCleaner(recipesUstensiles));
  setRecipe(recipesUstensiles);
}

export const allUstensiles = [];

/**
 * recherches tout les ustensiles pour le dropdown
 */
export function getAllUstensile(arr) {
  allUstensiles.length = 0;
  arr.forEach((ust) => {
    ust.ustensils.forEach((u) => {
      allUstensiles.push(u.toLowerCase());
    });
  });
  dispatchTagDOM("red", arrayCleaner(allUstensiles));
}

/**
 *
 * @param {string} item élément tag recherché
 */
export function searchEltTagByUst(item) {
  cleanDropdown();
  const recipesUstensiles = [];

  const arr = arrayToDropdown();
  arr.forEach((usts) => {
    usts.ustensils.filter((ust) => {
      if (ust.toLowerCase().includes(item.toLowerCase())) {
        recipesUstensiles.push(usts);
      }
    });
  });

  const eltPops = arrayCleaner(allUstensiles).filter((elt) => {
    return elt.toLowerCase() !== item.toLowerCase();
  });

  dropdownTagItemDOM("red", eltPops);
  reloadCard(recipesUstensiles);
  setRecipe(recipesUstensiles);
}
