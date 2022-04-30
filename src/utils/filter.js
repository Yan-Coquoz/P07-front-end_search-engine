import { recipes } from "../data/recipes.js";
import { reloadCard } from "./reloadCard.js";

// Recherche par tags (input)
/**
 * Recherche par ingrédients
 * @param {string} element
 * @returns {arrayOfObject}
 */
export function searchIngredient(element) {
  const recipesIngredients = [];

  recipes.map((obj) => {
    obj.ingredients.filter((ele) => {
      if (ele.ingredient.toLowerCase().includes(element.toLowerCase())) {
        recipesIngredients.push(obj);
      }
    });
  });

  if (recipesIngredients.length === 0) {
    ErrorInTagInput();
  } else {
    reloadCard(recipesIngredients);
  }
}

/**
 * Recherche par appareils
 * @param {string} element
 * @returns {arrayOfObject}
 */
export function searchAppareil(element) {
  const appareils = recipes.filter((app) => {
    return app.appliance.toLowerCase().includes(element.toLowerCase());
  });

  if (appareils.length === 0) {
    ErrorInTagInput();
  } else {
    console.log(appareils);
  }
}

/**
 * Recherche par ustensiles
 * @param {string} element
 * @returns {arrayOfObject}
 */
export function searchUstensile(element) {
  const recipesUstensiles = [];
  recipes.map((obj) => {
    return obj.ustensils.filter((item) => {
      if (item.toLowerCase().includes(element.toLowerCase())) {
        recipesUstensiles.push(obj);
      }
    });
  });
  recipesUstensiles.length === 0
    ? ErrorInTagInput()
    : reloadCard(recipesUstensiles);
}

/**
 * Créer un message d'erreur en cas de non concordance
 */
function ErrorInTagInput() {
  const parent = document.querySelector("#searching_bar");

  const span = document.createElement("span");
  const errorText = "Rien ne correspond à votre recherche";
  span.textContent = errorText;
  span.classList.add("text-danger", "fw-bold", "w-100", "offset-1", "py-2");

  parent.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 3000);
}

// Dropdown Tags

export function searchAllIngredient() {
  const allIngredients = [];
  recipes.forEach((props) => {
    props.ingredients.forEach((i) => {
      allIngredients.push(i.ingredient);
    });
  });
  const ingredients = arrayCleaner(allIngredients);
  // TODO  une fonction qui placera les données du tableau dans le dropdown
  console.log(ingredients);
}

export function searchAllAppareil() {
  const allAppareils = [];
  recipes.forEach((app) => {
    allAppareils.push(app.appliance);
  });
  const appareils = arrayCleaner(allAppareils);
  // TODO  une fonction qui placera les données du tableau dans le dropdown
  console.log(appareils);
}

export function searchAllUstensile() {
  const allUstensiles = [];
  recipes.forEach((ust) => {
    ust.ustensils.forEach((u) => {
      allUstensiles.push(u);
    });
  });
  const ustensiles = arrayCleaner(allUstensiles);
  // TODO  une fonction qui placera les données du tableau dans le dropdown
  console.log(ustensiles);
}

/**
 * Nettoye le tableau en entrée de ses valeurs en double
 * @param {array} arrays
 * @returns
 */
function arrayCleaner(arrays) {
  return [...new Set(arrays)];
}
