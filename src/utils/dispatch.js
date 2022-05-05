import {
  searchAppareil,
  searchIngredient,
  searchUstensile,
  searchAllAppareil,
  searchAllIngredient,
  searchAllUstensile,
} from "./filter.js";
import { dropdownTagItem, addSelectTag } from "./reloadTagDOM.js";

/**
 * distribut l'event selon l'input (champs / tag)
 * @param {KeyboardEvent} evt
 */
export function dispatchSelected(evt) {
  const element = evt.target.id;

  document.removeEventListener("input", dispatchSelected);

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
}

/**
 * distribut l'évent selon le type de l'input (modale)
 * @param {MouseEvent} evt
 */
export function dispatchCallTag(evt) {
  const btnColor = evt.target.id;
  document.removeEventListener("click", dispatchCallTag);

  switch (btnColor) {
    case "btn-blue":
      searchAllIngredient();
      break;

    case "btn-green":
      searchAllAppareil();
      break;

    case "btn-red":
      searchAllUstensile();
      break;
  }
}

/**
 * Renvoi les nouveaux tableau pour les tags
 * @param {string} type
 * @param {array} arr
 */
export function dispatchTagDOM(type, arr) {
  switch (type) {
    case "ingredient":
      dropdownTagItem("blue", arr);
      break;
    case "ustensile":
      dropdownTagItem("red", arr);
      break;
    case "appareil":
      dropdownTagItem("green", arr);
      break;
  }
}

/**
 * Permet de reccuperer l'item et la couleur du tag séléctionner dans son dropdown
 * @param {MouseEvent} evt
 */
export function dispatchGetElementInList(evt) {
  const couleur = evt.target.parentElement.attributes[1].nodeValue.slice(3);
  const value = evt.target.innerText;
  // TODO faire une fonction qui met a jour le dropdown et met à jour les recettes
  addSelectTag(couleur, value);
  document.removeEventListener("click", dispatchGetElementInList);
}
