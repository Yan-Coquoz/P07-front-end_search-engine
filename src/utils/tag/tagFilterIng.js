import {
  cleanDropdown,
  arrayCleaner,
  arrayToDropdown,
  setRecipe,
  getRecipes,
  allIngredients,
  presentTags,
  isTagValue,
  searchTagToAddTag,
} from "../misc.js";

import { deleteItem, filteredSuggestion } from "../filter.js";
import { dispatchTag } from "../dispatch/dispatchTag.js";
import { reloadCard, ErrorInTagInput, addSelectTagDOM } from "../reloadDOM.js";

/**
 * Recherche par ingrédients (input tag)
 * @param {string} color la couleur de l'input tag
 * @param {string} element caractères venant de l'input ou des tags
 */
export function searchIngredient(color, element, arr) {
  const errorText =
    "Il n'y a pas d'ingrédients correspondant à votre recherche";
  /**
   * @constant {arrayOfObject} recipesIngredients contient les recettes avec l'ingrédient recherché
   */
  const recipesIngredients = [];
  const getSuggests = [];
  const arrIngs = [];

  arr.forEach((obj) => {
    const results = obj.ingredients.filter((ele) => {
      if (ele.ingredient.toLowerCase().includes(element.toLowerCase())) {
        recipesIngredients.push(obj);
        if (ele.ingredient.toLowerCase() === element.toLowerCase()) {
          presentTags.push(element);
          arrIngs.push(element);
        }
        return ele.ingredient.toLowerCase().includes(element.toLowerCase());
      }
    });
    if (results.length >= 1) getSuggests.push(results);
  });
  if (recipesIngredients.length === 0) {
    ErrorInTagInput(errorText);
  } else {
    if (arrIngs.length !== 0) {
      searchTagToAddTag(color, arrIngs);
    } else {
      arrIngs.length = 0;
    }
    filteredSuggestion(color, getSuggests);
    setRecipe(arrayCleaner(recipesIngredients));
    reloadCard(arrayCleaner(recipesIngredients));
    getListIngForDropdown(color, getRecipes());
  }
}

// Dropdown Tags

/**
 * recherche tout les ingredients pour le dropdown
 * @param {string} color couleur du tag
 * @param {arrayOfObject} arr tableau de recettes
 */
export function getListIngForDropdown(color, arr) {
  allIngredients.length = 0;

  arr.forEach((elt) => {
    elt.ingredients.forEach((ing) => {
      allIngredients.push(ing.ingredient.toLowerCase());
    });
  });

  dispatchTag(color, arrayCleaner(allIngredients));
}

/**
 * A la selection du tag, va cherché l'élément dans les recettes qui correspondantes
 * @param {string} item élément tag recherché
 */
export function searchEltTagByIng(item) {
  cleanDropdown();
  const recipesIngredients = []; // pour le reloadCard
  const arr = arrayToDropdown();

  arr.forEach((obj) => {
    // un objet du tableau
    obj.ingredients.filter((ele) => {
      // check si, dans cette objet, il y a un tableau contenant une valeur item
      if (ele.ingredient.toLowerCase().includes(item.toLowerCase())) {
        // on stock l'obj
        recipesIngredients.push(obj);
      }
    });
  });

  const newArrays = deleteItem(item, arrayCleaner(allIngredients));
  dispatchTag("blue", newArrays);
  reloadCard(arrayCleaner(recipesIngredients));
  setRecipe(arrayCleaner(recipesIngredients));
}
