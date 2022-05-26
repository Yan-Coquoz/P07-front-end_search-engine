import {
  arrayCleaner,
  isInputTagEmpty,
  isMiniTag,
  isSearchbarEmpty,
  presentTags,
} from "./misc.js";
import { reloadCard, suggestionDOM } from "./reloadDOM.js";
import { reloadCascadTag } from "./tag/closeTag.js";
import { recipes } from "../data/recipes.js";

// Suggestions
/**
 * Selon la couleur et le tag selectionné, créer un nouveau tableau (suggestion tag)
 * @param {string} color
 * @param {arrayOfObject} arr des tableaux d'ingredients ou appareils ou ustensiles
 */
export function filteredSuggestion(color, arr) {
  const suggests = [];

  if (color === "blue") {
    arr.forEach((arrOfItem) => {
      for (const ing in arrOfItem) {
        const element = arrOfItem[ing];
        suggests.push(element.ingredient.toLowerCase());
      }
    });
  } else if (color === "green") {
    arr.forEach((app) => {
      suggests.push(app.appliance.toLowerCase());
    });
  } else if (color === "red") {
    arr.forEach((arrOfUst) => {
      for (let ust of arrOfUst.ustensils) {
        suggests.push(ust.toLowerCase());
      }
    });
  }

  suggestionDOM(color, arrayCleaner(suggests));
}

/**
 *  supprime un élément dans un tableau, et retourne le tableau
 * @param {string} item élément à supprimer
 * @param {array} arr tableau de string
 * @returns {array} un nouveau tableau de string
 */
export function deleteItem(item, arr) {
  const tab = arr.filter((elt) => {
    return elt.toLowerCase() !== item.toLowerCase();
  });
  const getIndex = arr.indexOf(item.toLowerCase());

  if (getIndex !== -1) {
    arr.splice(getIndex, 1);
  }
  return tab;
}

/**
 * nettoye le tableau des tags (string)
 * @returns {array} vide
 */
export function cleanPresentTags() {
  if (isMiniTag() + isInputTagEmpty() === 0) presentTags.length = 0;
}

/**
 * Tri des recettes par ordre alphabétique selon leurs titres
 * @param {arrayOfObject} arr tableau d'objet
 * @returns {arrayOfObject}
 */
export function sortRecipes(arr) {
  return arr.sort((prev, next) => prev.name.localeCompare(next.name));
}

export function deleteTag(evt) {
  evt.preventDefault();

  const closeTagElt = evt.target.parentElement;
  const deleteElt = evt.target.parentElement.textContent.toLowerCase();
  const colorElt = evt.srcElement.classList[0];
  const searchBar = document.querySelector("#search-bar").value;
  const searchIng = document.querySelector("#ingredient").value;
  const searchApp = document.querySelector("#appareil").value;
  const searchUst = document.querySelector("#ustensile").value;

  if (searchBar) {
    if (!presentTags.includes(searchIng)) {
      presentTags.push(searchBar);
    }
  }

  if (searchIng) {
    if (!presentTags.includes(searchIng)) {
      presentTags.push(searchIng);
    }
  }
  if (searchApp) {
    if (!presentTags.includes(searchIng)) {
      presentTags.push(searchApp);
    }
  }
  if (searchUst) {
    if (!presentTags.includes(searchIng)) {
      presentTags.push(searchUst);
    }
  }

  // suppression du tag
  const index = presentTags.indexOf(deleteElt);
  if (index !== -1) {
    presentTags.splice(index, 1);
    console.log("presentTags ", presentTags);
  }

  closeTagElt.remove();

  if (isMiniTag() + isInputTagEmpty() + isSearchbarEmpty() === 0) {
    presentTags.length = 0;
    reloadCard(recipes);
  }
  // recherche des recettes avec les tags présent.
  arrayCleaner(presentTags).forEach((elt) => {
    reloadCascadTag(colorElt, elt, recipes);
  });

  cleanPresentTags();
}
