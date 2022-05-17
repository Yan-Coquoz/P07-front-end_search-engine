import {
  searchAppareil,
  searchIngredient,
  searchUstensile,
  searchAllAppareil,
  searchAllIngredient,
  searchAllUstensile,
  searchEltTagByIng,
} from "./tagFilter.js";

import { dropdownTagItem, addSelectTagDOM } from "./reloadDOM.js";

/**
 * Distribut l'event selon l'input (champs / tag)
 * @param {KeyboardEvent} evt
 */
export function dispatchSelected(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const element = evt.target.id;

  switch (element) {
    case "ingredient":
      const ingredient = evt.target.value;
      searchIngredient(ingredient);
      break;
    case "appareil":
      const appareil = evt.target.value;
      searchAppareil(appareil);
      break;
    case "ustensile":
      const ustensile = evt.target.value;
      searchUstensile(ustensile);
      break;
  }
  document.removeEventListener("input", dispatchSelected);
}

/**
 * Distribut l'évent selon la modale
 * @param {MouseEvent} evt
 */
export function dispatchCallTag(evt) {
  evt.preventDefault();

  const btnColor = evt.target.id.slice(4);
  document.removeEventListener("click", dispatchCallTag);

  switch (btnColor) {
    case "blue":
      searchAllIngredient();
      break;
    case "green":
      searchAllAppareil();
      break;
    case "red":
      searchAllUstensile();
      break;
  }
}

/**
 * Renvoi les nouveaux tableau pour les tags
 * @param {string} typeOrColor le typeOrColor de selecteur ou sa couleur
 * @param {array} arr tableau de string
 */
export function dispatchTagDOM(typeOrColor, arr) {
  switch (typeOrColor) {
    case "ingredient":
    case "blue":
      dropdownTagItem("blue", arr);
      break;
    case "ustensile":
    case "red":
      dropdownTagItem("red", arr);
      break;
    case "appareil":
    case "green":
      dropdownTagItem("green", arr);
      break;
  }
}

/**
 * Renvois la couleur selon le type pour l'input (tag) et dispatch l'element pour un nouveau tableau
 * @param {string} color le type d'input
 * @param {string} item recherché
 * @returns {string} la classe de bootstrap pour la couleur
 */
export function dispatchTagElement(color, item) {
  // TODO revoir cette partie pour éliminer le tag du dropdown et refaire un nouveau tableau
  switch (color) {
    case "blue":
      searchEltTagByIng(item);
      searchIngredient(item);
      return "bg-primary";
    case "green":
      // searchEltTag(item, getRecipes());
      searchAppareil(item);
      return "bg-success";
    case "red":
      // searchEltTag(item, getRecipes());
      searchUstensile(item);
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
  addSelectTagDOM(couleur, value);
  document.removeEventListener("click", dispatchGetElementInList);
}
