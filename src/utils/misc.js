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

/**
 * check le status de l'input (searchbar) s'il est vide ou non.
 * @returns {number}
 */
export function isSearchbarEmpty() {
  return document.querySelector("#search-bar").value.length;
}

/**
 * check si les inputs des tags sont vide.
 * @returns {number}
 */
export function isInputTagEmpty() {
  const inputBlue = document.querySelector("#ingredient").value.length;
  const inputGreen = document.querySelector("#appareil").value.length;
  const inputRed = document.querySelector("#ustensile").value.length;
  // console.log(`blue ${inputBlue} green ${inputGreen} red ${inputRed}`);
  return inputBlue + inputGreen + inputRed;
}

/**
 * check s'il y a des tags présent sous la searchbar
 * @returns {number} le nombre de tags présent
 */
export function isMiniTag() {
  return document.querySelector(".ul_tag").childElementCount;
}

/**
 * Vérifie si les champs de tag et les tags sont vide
 * @returns {arrayOfObject}
 */
export function arrayToDropdown() {
  if (isInputTagEmpty() + isMiniTag() === 0) {
    return recipes;
  } else {
    return getRecipes();
  }
}
export function isTagValue(value) {
  let isBool;
  document.querySelectorAll(".ul_tag--li").forEach((item) => {
    isBool = item.textContent.toLowerCase() !== value.toLowerCase();
  });
  return isBool;
}

/**
 * Ferme le dropdown
 */
export function closeDropdown(couleur) {
  const btnDropdown = document.querySelector(`#btn-${couleur}`);
  const ulDropdown = document.querySelector(`#ul-${couleur}`);
  btnDropdown.classList.remove("show");
  ulDropdown.classList.remove("show");
}

// traitement du nouveau tableau de recette selon ce qui est recherché (setter / getter)
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
