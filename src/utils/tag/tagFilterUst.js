import {
  cleanDropdown,
  arrayCleaner,
  arrayToDropdown,
  setRecipe,
  getRecipes,
  allUstensiles,
  presentTags,
  searchTagToAddTag,
} from "../misc.js";

import { filteredSuggestion } from "../filter.js";
import { dispatchTag } from "../dispatch/dispatchTag.js";
import {
  dropdownTagItemDOM,
  reloadCard,
  ErrorInTagInput,
} from "../reloadDOM.js";

/**
 * Recherche par ustensiles (input tag)
 * @param {string} color couleur du tag
 * @param {string} element caractères venant de l'input
 */
export function searchUstensile(color, element, arr) {
  const errorText = "Il n'y a pas d'ustensiles correspondant à votre recherche";
  const recipesUstensiles = [];
  const arrUst = [];
  arr.map((obj) => {
    return obj.ustensils.filter((item) => {
      if (item.toLowerCase().includes(element.toLowerCase())) {
        recipesUstensiles.push(obj);
        if (item.toLowerCase() === element.toLowerCase()) {
          presentTags.push(element);
          arrUst.push(element);
        }
      }
    });
  });
  if (recipesUstensiles.length === 0) {
    ErrorInTagInput(errorText);
  } else {
    if (arrUst.length !== 0) {
      searchTagToAddTag(color, arrUst);
    } else {
      arrUst.length = 0;
    }
    filteredSuggestion(color, arrayCleaner(recipesUstensiles));
    reloadCard(arrayCleaner(recipesUstensiles));
    setRecipe(arrayCleaner(recipesUstensiles));
    getListUstForDropdown(color, getRecipes());
  }
}

/**
 * recherche tout les ustensiles pour le dropdown
 * @param {string} color couleur du tag
 * @param {arrayOfObject} arr tableau de recettes
 */
export function getListUstForDropdown(color, arr) {
  allUstensiles.length = 0;
  arr.forEach((ust) => {
    ust.ustensils.forEach((u) => {
      allUstensiles.push(u.toLowerCase());
    });
  });
  dispatchTag(color, arrayCleaner(allUstensiles));
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
