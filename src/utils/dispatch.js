import {
  searchAppareil,
  searchIngredient,
  searchUstensile,
  searchAllAppareil,
  searchAllIngredient,
  searchAllUstensile,
} from "./filter.js";
import { dropdownTagIngredient } from "./reloadDOM.js";

/**
 * distribut l'event
 * @param {KeyboardEvent} evt
 */
export function selected(evt) {
  const element = evt.target.id;
  document.removeEventListener("input", this.selected);

  if (evt.target.value.length >= 3) {
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
}

/**
 * distribut l'évent
 * @param {MouseEvent} evt
 */
export function callTags(evt) {
  const btnColor = evt.target.id;
  document.removeEventListener("click", callTags);

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
      dropdownTagIngredient("blue", arr);
      break;
    case "ustensile":
      dropdownTagIngredient("red", arr);
      break;
    case "appareil":
      dropdownTagIngredient("green", arr);
      break;
  }
}
