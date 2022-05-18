import {
  searchAppareil,
  searchIngredient,
  searchUstensile,
  getAllAppareil,
  getAllIngredient,
  getAllUstensile,
  searchEltTagByIng,
} from "./tagFilter.js";

import { dropdownTagItem, addSelectTagDOM } from "./reloadDOM.js";
import {
  cleanDropdown,
  getRecipes,
  isInputTagEmpty,
  isMiniTag,
  isSearchbarEmpty,
} from "./misc.js";
import { recipes } from "../data/recipes.js";

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
  const btnColor = evt.target.id.slice(4); // la couleur du btn
  document.removeEventListener("click", dispatchCallTag);

  cleanDropdown();

  switch (btnColor) {
    case "blue":
      console.log("nbr de tags :", isMiniTag());
      // Je check si tout est vide
      if (isSearchbarEmpty() + isInputTagEmpty() + isMiniTag() === 0) {
        console.log("recipes");
        getAllIngredient(recipes);
      } else if (
        // si la serchbar est vide et soit le champs tag et les tag sont remplis
        isSearchbarEmpty() === 0 &&
        isInputTagEmpty() + isMiniTag() !== 0
      ) {
        console.log("getRecipes() ", getRecipes());
        getAllIngredient(getRecipes());
      }
      // else if (
      //   isSearchbarEmpty() + isInputTagEmpty() === 0 &&
      //   isMiniTag() !== 0
      // ) {
      //   // TODO si il y a des tags déjà présent, faire un fonction qui va géré le tableau de string
      //   console.log(
      //     "tout les champs sont vide, mais il y a déjà des tags présent ."
      //   );
      // }
      break;
    case "green":
      if (isSearchbarEmpty() + isInputTagEmpty() + isMiniTag() === 0) {
        getAllAppareil(recipes);
      } else if (
        // si la serchbar est vide et soit le champs tag et les tag sont remplis
        isSearchbarEmpty() === 0 &&
        isInputTagEmpty() + isMiniTag() !== 0
      ) {
        getAllAppareil(getRecipes());
      }
      break;
    case "red":
      if (isSearchbarEmpty() + isInputTagEmpty() + isMiniTag() === 0) {
        getAllUstensile(recipes);
      } else if (
        isSearchbarEmpty() === 0 &&
        isInputTagEmpty() + isMiniTag() !== 0
      ) {
        getAllUstensile(getRecipes());
      }
      break;
  }
}

/**
 * Renvoi les nouveaux tableau pour les tags
 * @param {string} color couleur du champ
 * @param {array} arr tableau de string
 */
export function dispatchTagDOM(color, arr) {
  switch (color) {
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
      // searchIngredient(item);
      return "bg-primary";
    case "green":
      // searchEltTag(item, getRecipes());
      searchAppareil(item);
      return "bg-success";
    case "red":
      // searchEltTag(item, getRecipes());
      // searchUstensile(item);
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
