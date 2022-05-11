import { recipes } from "../data/recipes.js";

/**
 * supprime tous les éléments du dropdown
 */
export function cleanDropdown() {
  document.querySelectorAll("li.dropdown-item").forEach((item) => {
    item.remove();
  });
}

/**
 * Nettoye le tableau de ses doublons
 * @param {array} arrays
 * @returns {array}
 */
export function arrayCleaner(arrays) {
  /**
   * @param {string} item valeur du tableau
   * @param {number} next index de la valeur
   */
  return arrays.filter(function (item, next) {
    return arrays.indexOf(item) == next;
  });
}

// traitement du nouveau tableau de recette selon ce qui est recherché
const arrayTransitions = [];
/**
 * setter
 * @param {array} arr
 */
export function setRecipe(arr) {
  arrayTransitions.push(...arr);
}

/**
 * getter
 * @returns un tableau d'objet
 */
export function getRecipes() {
  return arrayCleaner(arrayTransitions);
}
