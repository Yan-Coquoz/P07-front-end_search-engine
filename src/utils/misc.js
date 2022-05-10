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

const arrayTransitions = [];
/**
 * @param {array} arr
 */
export function setRecipe(arr) {
  arrayTransitions.push(...arr);
}

/**
 * @returns un tableau d'objet
 */
export function getRecipes() {
  const arr = arrayTransitions;
  return arrayCleaner(arr);
}
