import { searchUstensile, searchEltTagByUst } from "../tag/tagFilterUst.js";
import { searchAppareil, searchEltTagByApp } from "../tag/tagFilterApp.js";
import { searchIngredient, searchEltTagByIng } from "../tag/tagFilterIng.js";
import {
  dropdownTagItemDOM,
  addSelectTagDOM,
  ErrorInTagInput,
} from "../reloadDOM.js";
import { deleteItem } from "../filter.js";
import {
  cleanDropdown,
  getRecipes,
  isMiniTag,
  isSearchbarEmpty,
  closeDropdown,
  isTagValue,
  isInputTagEmpty,
  presentTags,
} from "../misc.js";
import { recipes } from "../../data/recipes.js";

/**
 * Distribut l'event selon l'input ou le bouton des tags
 * @param {KeyboardEvent|MouseEvent} evt évènement de l'input ou du bouton des tags
 */
export function dispatchSelectedTag(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const item = evt.target.value;

  let color, arr;

  if (evt.type === "input") {
    color = evt.target.classList[2];
    if (isSearchbarEmpty() + isMiniTag() === 0) {
      arr = recipes;
    } else {
      arr = getRecipes();
    }
  } else if (evt.type === "click") {
    color = evt.target.id.slice(4);
    if (isSearchbarEmpty() + isInputTagEmpty() + isMiniTag() === 0) {
      arr = recipes;
    } else {
      arr = getRecipes();
    }
  }

  cleanDropdown();

  switch (color) {
    case "blue":
      searchIngredient(color, item, arr);
      break;
    case "green":
      searchAppareil(color, item, arr);
      break;
    case "red":
      searchUstensile(color, item, arr);
      break;
  }
  document.removeEventListener("input", dispatchSelectedTag);
}

/**
 * Renvoi les nouveaux tableau pour les tags et gère l'ajout/suppression des tags
 * @param {string} color couleur du champ
 * @param {array} arr tableau de string
 */
export function dispatchTag(color, arr) {
  const inputSearchTag = document.querySelector(`input.${color}`).value;
  let newArr;

  if (arr.includes(inputSearchTag)) {
    newArr = deleteItem(inputSearchTag, arr);
    dropdownTagItemDOM(color, newArr);
  }

  if (isMiniTag() !== 0) {
    presentTags.forEach((item) => {
      newArr = deleteItem(item, arr);
    });
    dropdownTagItemDOM(color, newArr);
  } else {
    dropdownTagItemDOM(color, arr);
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
      searchEltTagByIng(item);
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
