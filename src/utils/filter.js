import {
  arrayCleaner,
  getRecipes,
  isInputTagEmpty,
  isMiniTag,
  isSearchbarEmpty,
} from "./misc.js";
import { reloadCard, suggestionDOM } from "./reloadDOM.js";
import { allIngredients } from "./tag/tagFilterIng.js";
import { allAppareils } from "./tag/tagFilterApp.js";
import { allUstensiles } from "./tag/tagFilterUst.js";
import { recipes } from "../data/recipes.js";
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
 * @returns {array}
 */
export function deleteItem(item, arr) {
  console.log(item);
  return arr.filter((elt) => {
    return elt.toLowerCase() !== item.toLowerCase();
  });
}
/**
 * nettoye le tableau des tags (string)
 * @returns {array} vide
 */
export function cleanPresentTags() {
  if (isMiniTag() + isInputTagEmpty() === 0) {
    return (presentTags.length = 0);
  }
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
  // TODO le reload après avoir delete
  const closeElt = evt.target.parentElement;
  const colorElt = evt.srcElement.classList[0];
  const deleteElt = evt.target.parentElement.textContent.toLowerCase();
  closeElt.remove();

  console.log("++ color ++", colorElt);
  console.log("++ element supp ++", deleteElt);
  // console.log("ingredient  ", allIngredients);
  // console.log("appareils  ", allAppareils);
  // console.log("ustensiles  ", allUstensiles);

  document.querySelectorAll(".ul_tag--li").forEach((elt) => {
    console.log("++ element restant ++", elt.textContent);
  });

  if (isMiniTag() + isInputTagEmpty() + isSearchbarEmpty() === 0) {
    console.log("il n'y a plus de tags");
    presentTags.length = 0;
    reloadCard(recipes);
  } else {
    reloadCard(getRecipes());
  }

  presentTags = [...deleteItem(deleteElt, presentTags)];
  console.log(activeElts);
  cleanPresentTags();
}
