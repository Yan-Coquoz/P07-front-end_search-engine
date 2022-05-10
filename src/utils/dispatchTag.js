import {
  searchAppareil,
  searchIngredient,
  searchUstensile,
  searchAllAppareil,
  searchAllIngredient,
  searchAllUstensile,
} from "./tagFilter.js";
import { cleanDropdown } from "./misc.js";
import { dropdownTagItem, addSelectTag } from "./reloadDOM.js";

/**
 * distribut l'event selon l'input (champs / tag)
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
 * distribut l'évent selon le typeOrColor de l'input (modale)
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
 * @param {array} arr
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
 * Permet de reccuperer l'item et la couleur du tag séléctionner dans son dropdown
 * @param {MouseEvent} evt
 */
export function dispatchGetElementInList(evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const couleur = evt.target.parentElement.attributes[1].nodeValue.slice(3);
  const value = evt.target.innerText;
  addSelectTag(couleur, value);
  cleanDropdown();
  document.removeEventListener("click", dispatchGetElementInList);
}
