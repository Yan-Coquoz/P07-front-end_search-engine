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

/**
 * check le status de l'input
 * @returns {number}
 */
export function isSearchbarEmpty() {
  const input = document.querySelector("#search-bar");
  return input.value.length;
}

// traitement du nouveau tableau de recette selon ce qui est recherché
const arrayTransitions = [];
/**
 * setter, arrivé d'un tableau crée par la searchbar
 * @param {array} arr
 */
export function setRecipe(arr) {
  arrayTransitions.push(...arr);
}

/**
 * getter, retourne le nouveau tableau de recettes
 * @returns un tableau d'objet
 */
export function getRecipes() {
  return arrayCleaner(arrayTransitions);
}
