import { recipes } from "../data/recipes.js";
import {
  arrayCleaner,
  getRecipes,
  isSearchbarEmpty,
  isInputTagEmpty,
  setRecipe,
  cleanDropdown,
} from "./misc.js";
import { reloadCard, suggestionDOM, ErrorInTagInput } from "./reloadDOM.js";
import { dispatchTagDOM } from "./dispatchTag.js";

/**
 * Recherche par ingrédients (input tag)
 * @param {string} element caractères venant de l'input
 * @returns {arrayOfObject}
 */
export function searchIngredient(element) {
  const allRecipes = isSearchbarEmpty() === 0 ? recipes : getRecipes();

  const recipesIngredients = [];
  const getSuggests = [];

  allRecipes.map((obj) => {
    const results = obj.ingredients.filter((ele) => {
      if (ele.ingredient.toLowerCase().includes(element.toLowerCase())) {
        recipesIngredients.push(obj);
        return ele.ingredient.toLowerCase().includes(element.toLowerCase());
      }
    });
    if (results.length >= 1) getSuggests.push(results);
  });

  if (recipesIngredients.length === 0) {
    ErrorInTagInput();
  } else {
    filteredSuggestion("blue", getSuggests);
    reloadCard(arrayCleaner(recipesIngredients));
    setRecipe(recipesIngredients);
  }
}

/**
 * Recherche par appareils (input tag)
 * @param {string} element caractères venant de l'input
 * @returns {arrayOfObject}
 */
export function searchAppareil(element) {
  const allRecipes = isSearchbarEmpty() === 0 ? recipes : getRecipes();

  const recipesAppareils = allRecipes.filter((app) => {
    return app.appliance.toLowerCase().includes(element.toLowerCase());
  });

  recipesAppareils.length === 0
    ? ErrorInTagInput()
    : filteredSuggestion("green", recipesAppareils);
  reloadCard(arrayCleaner(recipesAppareils));
  setRecipe(recipesAppareils);
}

/**
 * Recherche par ustensiles (input tag)
 * @param {string} element caractères venant de l'input
 * @returns {arrayOfObject}
 */
export function searchUstensile(element) {
  const allRecipes = isSearchbarEmpty() === 0 ? recipes : getRecipes();
  const recipesUstensiles = [];
  allRecipes.map((obj) => {
    return obj.ustensils.filter((item) => {
      if (item.toLowerCase().includes(element.toLowerCase())) {
        recipesUstensiles.push(obj);
      }
    });
  });
  recipesUstensiles.length === 0
    ? ErrorInTagInput()
    : filteredSuggestion("red", recipesUstensiles);
  reloadCard(arrayCleaner(recipesUstensiles));
  setRecipe(recipesUstensiles);
}

// Dropdown Tags
/**
 * recherches tout les ingredients pour le dropdown
 */
export function searchAllIngredient() {
  cleanDropdown();
  let allRecipes = [];
  if (isSearchbarEmpty() === 0 && isInputTagEmpty() === 0) {
    allRecipes.length = 0;
    allRecipes = recipes;
  } else {
    allRecipes.length = 0;
    allRecipes = getRecipes();
  }

  const allIngredients = [];

  allRecipes.forEach((props) => {
    props.ingredients.forEach((i) => {
      allIngredients.push(i.ingredient.toLowerCase());
    });
  });
  /**
   * @constant {arrayOfString} ingredients
   */
  const ingredients = arrayCleaner(allIngredients);
  dispatchTagDOM("ingredient", ingredients);
}

/**
 * recherches tout les appareils pour le dropdown
 */
export function searchAllAppareil() {
  cleanDropdown();
  const allRecipes =
    isSearchbarEmpty() + isInputTagEmpty() === 0 ? recipes : getRecipes();

  const allAppareils = [];

  allRecipes.forEach((app) => {
    allAppareils.push(app.appliance.toLowerCase());
  });

  /**
   * @constant {arrayOfString} appareils
   */
  const appareils = arrayCleaner(allAppareils);
  dispatchTagDOM("appareil", appareils);
}

/**
 * recherches tout les ustensiles pour le dropdown
 */
export function searchAllUstensile() {
  cleanDropdown();
  const allRecipes =
    isSearchbarEmpty() + isInputTagEmpty() === 0 ? recipes : getRecipes();
  const allUstensiles = [];

  allRecipes.forEach((ust) => {
    ust.ustensils.forEach((u) => {
      allUstensiles.push(u.toLowerCase());
    });
  });
  /**
   * @constant {arrayOfString} ustensiles
   */
  const ustensiles = arrayCleaner(allUstensiles);
  dispatchTagDOM("ustensile", ustensiles);
}

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
