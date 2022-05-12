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
 * check le status de l'input (searchbar)
 * @returns {number}
 */
export function isSearchbarEmpty() {
  const input = document.querySelector("#search-bar").value.length;

  return input;
}
/**
 * Retourne la longueur des carateres dans les inputs (tag)
 * @returns {number}
 */
export function isInputTagEmpty() {
  const inputBlue = document.querySelector(".blue").value.length;
  const inputGreen = document.querySelector(".green").value.length;
  const inputRed = document.querySelector(".red").value.length;

  return inputBlue + inputGreen + inputRed;
}

// traitement du nouveau tableau de recette selon ce qui est recherché
const arrayTransitions = [];
/**
 * setter, arrivé d'un tableau crée par la searchbar
 * @param {array} arr
 */
export function setRecipe(arr) {
  arrayTransitions.length = 0;
  arrayTransitions.push(...arr);
}

/**
 * getter, retourne le nouveau tableau de recettes
 * @returns un tableau d'objet
 */
export function getRecipes() {
  return arrayCleaner(arrayTransitions);
}
