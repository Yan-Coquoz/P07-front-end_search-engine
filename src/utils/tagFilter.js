import { recipes } from "../data/recipes.js";
import {
  arrayCleaner,
  getRecipes,
  isSearchbarEmpty,
  // isInputTagEmpty,
  setRecipe,

  // isMiniTag,
} from "./misc.js";
import {
  reloadCard,
  suggestionDOM,
  ErrorInTagInput,
  dropdownTagItem,
} from "./reloadDOM.js";
import { dispatchTagDOM } from "./dispatchTag.js";

/**
 * Recherche par ingrédients (input tag)
 * @param {string} element caractères venant de l'input ou des tags
 * @returns {arrayOfObject}
 */
export function searchIngredient(element) {
  const allRecipes = isSearchbarEmpty() === 0 ? recipes : getRecipes();

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
    ErrorInTagInput();
  } else {
    filteredSuggestion("blue", getSuggests);
    reloadCard(arrayCleaner(recipesIngredients));
    setRecipe(arrayCleaner(recipesIngredients));
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

// tableau de string pour le dropdown
const allIngredients = [];
const allAppareils = [];
const allUstensiles = [];
/**
 * recherches tout les ingredients pour le dropdown
 * @param {arrayOfObject} arr
 */
export function getAllIngredient(arr) {
  allIngredients.length = 0;

  arr.forEach((elt) => {
    elt.ingredients.forEach((ingredient) => {
      allIngredients.push(ingredient.ingredient.toLowerCase());
    });
  });

  dispatchTagDOM("blue", arrayCleaner(allIngredients));
}

/**
 * recherches tout les appareils pour le dropdown
 */
export function getAllAppareil(arr) {
  allAppareils.length = 0;
  arr.forEach((app) => {
    allAppareils.push(app.appliance.toLowerCase());
  });
  dispatchTagDOM("green", arrayCleaner(allAppareils));
}

/**
 * recherches tout les ustensiles pour le dropdown
 */
export function getAllUstensile(arr) {
  allUstensiles.length = 0;
  arr.forEach((ust) => {
    ust.ustensils.forEach((u) => {
      allUstensiles.push(u.toLowerCase());
    });
  });
  dispatchTagDOM("red", arrayCleaner(allUstensiles));
}

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

export function searchEltTagByIng(item) {
  /**
   // TODO cette fonction doit :
  * 
  */
  const recipesIngredients = []; // pour le reloadCard
  const itemToPops = []; // mise à jour du talbeau du dropdown (tableau de string)

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
  console.log("tableau du reload ", recipesIngredients);
  // fait un tableau de string
  recipesIngredients.forEach((elt) => {
    elt.ingredients.forEach((ing) => {
      itemToPops.push(ing.ingredient.toLowerCase());
    });
  });

  console.log(itemToPops);

  // je supprime l'élément recherché
  const eltPops = itemToPops.filter(
    (elt) => elt.toLowerCase() !== item.toLowerCase()
  );
  console.log(eltPops);

  reloadCard(recipesIngredients);
  setRecipe(recipesIngredients);
  //!  NOTE  ce doit être un tableau de string
  dropdownTagItem("red", eltPops);
}
/**
 * option 1
 * searchEltTagByIng(item)
 * 1) si les champs sont vide, tu prends le tableau recipes
 * 2) on boucle pour trouver les bons items recherché
 * 3) on stock les objets dans un tableau recipesIngredients.
 * 4) on boucle sur ce tableau (recipesIngredients) et on recupere tout les ingredients que l'on va stocké dans un tableau de string (itemToPops)
 * 5) on  boucle sur ce tableau de string (itemToPops) pour en supprimé la valeur recherché.
 * 6) un fois la valeur enlever, on envois le tableau (itemToPops) pour le nouveau rendu du dropdown
 * 7) le tableau recipesIngredients est utilisé pour le nouveau rendu des recettes
 */
/**
 * option 2
 * searchEltTagByIng(item)
 *
 */
