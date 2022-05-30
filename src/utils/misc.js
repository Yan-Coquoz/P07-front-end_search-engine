import { recipes } from "../data/recipes.js";

/**
 * tableau de string des tags courant, s'assure que les recettes possèdent ses valeurs
 * @type {array}
 */
export let presentTags = [];
/**
 * tableau de string pour le dropdown
 * @type {array}
 */
export const allIngredients = [];
/**
 * tableau de string pour le dropdown
 * @type {array}
 */
export const allAppareils = [];
/**
 * tableau de string pour le dropdown
 * @type {array}
 */
export const allUstensiles = [];

/**
 * supprime tous les éléments du dropdown
 */
export function cleanDropdown() {
  document.querySelectorAll("li.dropdown-item").forEach((item) => {
    item.remove();
  });
}
/**
 * Contrôle si tous les champs ont une valeur, si oui, la place dans le tableau presentTags.
 */
export function fieldControl() {
  const searchBar = document.querySelector("#search-bar").value;
  const searchIng = document.querySelector("#ingredient").value;
  const searchApp = document.querySelector("#appareil").value;
  const searchUst = document.querySelector("#ustensile").value;

  // Check si les valeurs des inputs sont presents.
  presentTags.forEach((item) => {
    if (searchBar) {
      if (!item.toLowerCase().includes(searchBar.toLowerCase())) {
        presentTags.push(searchBar);
      }
    }
    if (searchIng) {
      if (!item.toLowerCase().includes(searchIng.toLowerCase())) {
        presentTags.push(searchIng);
      }
    }
    if (searchApp) {
      if (!item.toLowerCase().includes(searchApp.toLowerCase())) {
        presentTags.push(searchApp);
      }
    }
    if (searchUst) {
      if (!item.toLowerCase().includes(searchUst.toLowerCase())) {
        presentTags.push(searchUst);
      }
    }
  });
}

/**
 * Nettoye le tableau de ses doublons
 * @param {array} arrays
 * @returns {array} retourne le tableau
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
  if (isSearchbarEmpty() + isInputTagEmpty() + isMiniTag() === 0) {
    return recipes;
  } else {
    return getRecipes();
  }
}

/**
 * Si la valeur selectionné est déja présent (true) sinon (false)
 * @param {string} value valeur du tag
 * @returns {boolean}
 */
export function isTagValue(value) {
  const arr = [];
  let isBool;
  document.querySelectorAll(".ul_tag--li").forEach((item) => {
    arr.push(item.textContent.toLowerCase());
  });
  arr.find((item) => {
    isBool = item.includes(value.toLowerCase());
    return isBool;
  });
  arr.length = 0;
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
