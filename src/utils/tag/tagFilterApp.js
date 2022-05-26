import { filteredSuggestion } from "../filter.js";
import { dispatchTag } from "../dispatch/dispatchTag.js";
import {
  dropdownTagItemDOM,
  reloadCard,
  ErrorInTagInput,
} from "../reloadDOM.js";
import {
  cleanDropdown,
  arrayCleaner,
  arrayToDropdown,
  setRecipe,
  getRecipes,
  allAppareils,
} from "../misc.js";

/**
 * Recherche par appareils (input tag)
 * @param {string} color la couleur de l'input tag
 * @param {string} element caractères venant de l'input ou des tags
 */
export function searchAppareil(color, element, arr) {
  const errorText = "Il n'y a pas d'appareils correspondant à votre recherche";

  const recipesAppareils = arr.filter((app) => {
    return app.appliance.toLowerCase().includes(element.toLowerCase());
  });

  recipesAppareils.length === 0
    ? ErrorInTagInput(errorText)
    : filteredSuggestion(color, recipesAppareils);
  reloadCard(arrayCleaner(recipesAppareils));
  setRecipe(recipesAppareils);
  getListAppForDropdown(color, getRecipes());
}

// Dropdown Tags

/**
 * recherche tout les appareils pour le dropdown
 * @param {string} color couleur du tag
 * @param {arrayOfObject} arr tableau de recettes
 */
export function getListAppForDropdown(color, arr) {
  allAppareils.length = 0;
  arr.forEach((app) => {
    allAppareils.push(app.appliance.toLowerCase());
  });
  dispatchTag(color, arrayCleaner(allAppareils));
}

/**
 * supprime l'élément taggé du dropdown
 * @param {string} item élément tag recherché
 */
export function searchEltTagByApp(item) {
  cleanDropdown();
  const recipesAppareils = [];
  const arr = arrayToDropdown();

  arr.filter((app) => {
    if (app.appliance.toLowerCase().includes(item.toLowerCase())) {
      recipesAppareils.push(app);
    }
  });

  const eltPops = arrayCleaner(allAppareils).filter((elt) => {
    return elt.toLowerCase() !== item.toLowerCase();
  });

  dropdownTagItemDOM("green", eltPops);
  setRecipe(recipesAppareils);
  reloadCard(recipesAppareils);
}
