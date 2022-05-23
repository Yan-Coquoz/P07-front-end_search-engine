import { recipes } from "../../data/recipes.js";
import {
  cleanDropdown,
  arrayCleaner,
  arrayToDropdown,
  setRecipe,
  isSearchbarEmpty,
} from "../misc.js";

import { deleteItem, filteredSuggestion } from "../filter.js";
import { dispatchTag } from "../dispatch/dispatchTag.js";
import {
  dropdownTagItemDOM,
  reloadCard,
  ErrorInTagInput,
} from "../reloadDOM.js";
//@ts-check

/**
 * Recherche par ingrédients (input tag)
 * @param {string} element caractères venant de l'input ou des tags
 * @returns {arrayOfObject}
 */
export function searchIngredient(element) {
  const allRecipes = isSearchbarEmpty() === 0 ? recipes : getRecipes();
  const errorText =
    "Il n'y a pas d'ingrédients correspondant à votre recherche";
  /**
   * @constant {arrayOfObject} recipesIngredients contient les recettes avec l'ingrédient recherché
   */
  const recipesIngredients = [];

  const getSuggests = [];

  allRecipes.forEach((obj) => {
    const results = obj.ingredients.filter((ele) => {
      if (ele.ingredient.toLowerCase().includes(element.toLowerCase())) {
        recipesIngredients.push(obj);
        return ele.ingredient.toLowerCase().includes(element.toLowerCase());
      }
    });
    if (results.length >= 1) getSuggests.push(results);
  });

  if (recipesIngredients.length === 0) {
    ErrorInTagInput(errorText);
  } else {
    filteredSuggestion("blue", getSuggests);

    reloadCard(arrayCleaner(recipesIngredients));

    setRecipe(arrayCleaner(recipesIngredients));
  }
}

// Dropdown Tags

// tableau de string pour le dropdown
export const allIngredients = [];

/**
 * recherches tout les ingredients pour le dropdown
 * @param {arrayOfObject} arr prend un tableau d'objet
 */
export function getAllIngredient(arr) {
  cleanDropdown();

  allIngredients.length = 0;
  arr.forEach((elt) => {
    elt.ingredients.forEach((ingredient) => {
      allIngredients.push(ingredient.ingredient.toLowerCase());
    });
  });

  dispatchTag("blue", arrayCleaner(allIngredients));
}

/**
 * @param {string} item élément tag recherché
 */
export function searchEltTagByIng(item) {
  cleanDropdown();
  const recipesIngredients = []; // pour le reloadCard
  const arr = arrayToDropdown();

  arr.forEach((obj) => {
    // un objet du tableau
    obj.ingredients.filter((ele) => {
      // check si dans cette objet il y a un tableau contenant une valeur item
      if (ele.ingredient.toLowerCase().includes(item.toLowerCase())) {
        // on stock l'obj
        recipesIngredients.push(obj);
      }
    });
  });

  // je supprime l'élément recherché
  dropdownTagItemDOM("blue", arrayCleaner(deleteItem(item, allIngredients)));

  reloadCard(arrayCleaner(recipesIngredients));
  setRecipe(arrayCleaner(recipesIngredients));
}
