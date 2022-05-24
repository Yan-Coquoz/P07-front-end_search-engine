import {
  searchUstensile,
  getAllUstensile,
  searchEltTagByUst,
} from "../tag/tagFilterUst.js";
import {
  searchAppareil,
  getAllAppareil,
  searchEltTagByApp,
} from "../tag/tagFilterApp.js";
import {
  searchIngredient,
  getAllIngredient,
  searchEltTagByIng,
} from "../tag/tagFilterIng.js";
import {
  dropdownTagItemDOM,
  addSelectTagDOM,
  ErrorInTagInput,
} from "../reloadDOM.js";
import {
  cleanDropdown,
  getRecipes,
  isInputTagEmpty,
  isMiniTag,
  isSearchbarEmpty,
  closeDropdown,
  isTagValue,
} from "../misc.js";
import { recipes } from "../../data/recipes.js";

/**
 * Distribut l'event selon l'input (champs des tags)
 * @param {KeyboardEvent|MouseEvent} evt évènement de l'input ou du bouton des tags
 */
export function dispatchSelectedTag(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const item = evt.target.value;

  let color, arr;

  if (evt.type === "input") {
    color = evt.target.classList[2];
  } else if (evt.type === "click") {
    color = evt.target.id.slice(4);
  }

  cleanDropdown();

  if (isSearchbarEmpty() + isInputTagEmpty() + isMiniTag() === 0) {
    console.log("recipes");
    arr = recipes;
  } else {
    console.log("getRecipes");
    arr = getRecipes();
  }

  switch (color) {
    case "blue":
      searchIngredient(color, item, arr);
      getAllIngredient(arr);
      break;
    case "green":
      searchAppareil(color, item, arr);
      getAllAppareil(arr);
      break;
    case "red":
      searchUstensile(color, item, arr);
      getAllUstensile(arr);
      break;
  }
  document.removeEventListener("input", dispatchSelectedTag);
}

/**
 * Renvoi les nouveaux tableau pour les tags
 * @param {string} color couleur du champ
 * @param {array} arr tableau de string
 */
export function dispatchTag(color, arr) {
  switch (color) {
    case "blue":
      if (arr.length !== 0) {
        dropdownTagItemDOM("blue", arr);
      }
      break;
    case "red":
      if (arr.length !== 0) {
        dropdownTagItemDOM("red", arr);
      }
      break;
    case "green":
      if (arr.length !== 0) {
        dropdownTagItemDOM("green", arr);
      }
      break;
  }
}

/**
 * Renvois la couleur selon le type pour l'input (tag) et dispatch l'element pour un nouveau tableau
 * @param {string} color le type d'input
 * @param {string} item recherché
 * @returns {string} la classe de bootstrap pour la couleur
 */
export function dispatchAndGetColor(color, item) {
  switch (color) {
    case "blue":
      if (isInputTagEmpty() === 0) {
        searchEltTagByIng(item);
      }
      return "bg-primary";
    case "green":
      searchEltTagByApp(item);

      return "bg-success";
    case "red":
      searchEltTagByUst(item);

      return "bg-danger";
  }
}

/**
 * Permet de reccuperer l'item et la couleur du tag séléctionner dans son dropdown
 * @param {MouseEvent} evt
 */
export function dispatchGetElementInList(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const couleur = evt.target.parentElement.attributes[1].nodeValue.slice(3);
  const value = evt.target.innerText;
  // Fermeture du dropdown après avoir selectionné un item (rafraichissement)
  closeDropdown(couleur);
  // check si le tag est déjà présent
  if (!document.querySelector(".ul_tag--li") || !isTagValue(value)) {
    addSelectTagDOM(couleur, value);
  } else {
    const textError = "Ce filtre existe déjà !";
    ErrorInTagInput(textError);
  }
  document.removeEventListener("click", dispatchGetElementInList);
}
