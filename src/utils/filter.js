import { arrayCleaner } from "./misc.js";
import { suggestionDOM } from "./reloadDOM.js";

// Suggestions
/**
 * Selon la couleur et le tag selectionné, créer un nouveau tableau (suggestion tag)
 * @param {string} color
 * @param {arrayOfObject} arr des tableaux d'ingredients ou appareils ou ustensiles
 */
export function filteredSuggestion(color, arr) {
  const suggests = [];

  if (color === "blue") {
    arr.forEach((item) => {
      for (const key in item) {
        const element = item[key];
        suggests.push(element.ingredient.toLowerCase());
      }
    });
  } else if (color === "green") {
    arr.forEach((item) => {
      suggests.push(item.appliance.toLowerCase());
    });
  } else if (color === "red") {
    arr.forEach((ust) => {
      for (let item of ust.ustensils) {
        suggests.push(item.toLowerCase());
      }
    });
  }
  suggestionDOM(color, arrayCleaner(suggests));
}

export function deleteTag(evt) {
  evt.preventDefault();
  const closeElt = evt.target.parentElement;
  // const colorElt = evt.srcElement.classList[0];
  closeElt.remove();

  // switch (colorElt) {
  //   case "blue":
  //     dispatchAndGetColor(colorElt, allIngredients);
  //     break;
  //   case "green":
  //     dropdownTagItemDOM(colorElt, allAppareils);
  //     break;
  //   case "red":
  //     dropdownTagItemDOM(colorElt, allUstensiles);
  //     break;
  // }
}
