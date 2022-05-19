import { recipes } from "../../data/recipes.js";
import { filteredSuggestion } from "../filter.js";
import { dispatchTagDOM } from "../dispatch/dispatchTag.js";
import { dropdownTagItemDOM, reloadCard } from "../reloadDOM.js";
import {
  cleanDropdown,
  arrayCleaner,
  arrayToDropdown,
  setRecipe,
  isSearchbarEmpty,
} from "../misc.js";

/**
 * Recherche par appareils (input tag)
 * @param {string} element caractères venant de l'input
 * @returns {arrayOfObject}
 */
export function searchAppareil(element) {
  const allRecipes = isSearchbarEmpty() === 0 ? recipes : getRecipes();

  const recipesAppareils = allRecipes.filter((app) => {
    return app.appliance.toLowerCase().includes(element.toLowerCase());
  });

  recipesAppareils.length === 0
    ? ErrorInTagInput()
    : filteredSuggestion("green", recipesAppareils);
  reloadCard(arrayCleaner(recipesAppareils));
  setRecipe(recipesAppareils);
}

const allAppareils = [];
/**
 * recherches tout les appareils pour le dropdown
 */
export function getAllAppareil(arr) {
  allAppareils.length = 0;
  arr.forEach((app) => {
    allAppareils.push(app.appliance.toLowerCase());
  });
  dispatchTagDOM("green", arrayCleaner(allAppareils));
}

/**
 * Doit supprimé l'élément taggé du dropdown
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
