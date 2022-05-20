import { arrayCleaner } from "./misc.js";
import { suggestionDOM } from "./reloadDOM.js";
import { allIngredients } from "./tag/tagFilterIng.js";
import { allAppareils } from "./tag/tagFilterApp.js";
import { allUstensiles } from "./tag/tagFilterUst.js";
/**
 * @constant {array} presentTags tableau de string des tags courant.
 */
export let presentTags = [];

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
  // TODO empeché la duplication du tag avant d'implémenter le delete
  const closeElt = evt.target.parentElement;
  const colorElt = evt.srcElement.classList[0];
  const deleteItem = evt.target.parentElement.textContent;
  closeElt.remove();
  console.log("ingredient présent dans les recettes ", allIngredients);
  console.log("appareils présent dans les recettes ", allAppareils);
  console.log("ustensiles présent dans les recettes ", allUstensiles);
  const presentEltTags = document.querySelectorAll(".ul_tag--li");
  presentEltTags.forEach((elt) => {
    console.log(elt.textContent);
  });
  console.log(presentTags);
  const updatePresentTags = presentTags.filter((elt) => {
    return elt.toLowerCase() !== deleteItem.toLowerCase();
  });
  [presentTags] = [updatePresentTags];
  console.log(presentTags);
}
