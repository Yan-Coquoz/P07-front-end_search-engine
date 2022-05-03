import { recipes } from "../data/recipes.js";
import { reloadCard, suggestion } from "./reloadDOM.js";
import { dispatchTagDOM } from "./dispatch.js";

// Recherche par tags (input)
/**
 * Recherche par ingrédients
 * @param {string} element
 * @returns {arrayOfObject}
 */
export function searchIngredient(element) {
  const recipesIngredients = [];
  const getSuggests = [];

  recipes.map((obj) => {
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
    suggestion("blue", getSuggests);
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

  appareils.length === 0 ? ErrorInTagInput() : reloadCard(appareils);
  suggestion("green", appareils);
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
  suggestion("red", recipesUstensiles);
}

// Dropdown Tags
/**
 * recherches tout les ingredients pour le dropdown
 */
export function searchAllIngredient() {
  const allIngredients = [];
  recipes.forEach((props) => {
    props.ingredients.forEach((i) => {
      allIngredients.push(i.ingredient);
    });
  });
  const ingredients = arrayCleaner(allIngredients);
  dispatchTagDOM("ingredient", ingredients);
}
/**
 * recherches tout les appareils pour le dropdown
 */
export function searchAllAppareil() {
  const allAppareils = [];
  recipes.forEach((app) => {
    allAppareils.push(app.appliance);
  });
  const appareils = arrayCleaner(allAppareils);
  dispatchTagDOM("appareil", appareils);
}
/**
 * recherches tout les ustensiles pour le dropdown
 */
export function searchAllUstensile() {
  const allUstensiles = [];
  recipes.forEach((ust) => {
    ust.ustensils.forEach((u) => {
      allUstensiles.push(u);
    });
  });
  const ustensiles = arrayCleaner(allUstensiles);
  dispatchTagDOM("ustensile", ustensiles);
}

/**
 * Nettoye le tableau en entrée de ses valeurs en double
 * @param {array} arrays
 * @returns
 */
export function arrayCleaner(arrays) {
  return [...new Set(arrays)];
}

/**
 * Créer un message d'erreur en cas de non concordance
 */
function ErrorInTagInput() {
  const parent = document.querySelector("#searching_bar");
  if (!document.getElementById("error_span")) {
    const span = document.createElement("span");
    const errorText = "Rien ne correspond à votre recherche";
    span.textContent = errorText;
    span.classList.add(
      "text-danger",
      "fw-bold",
      "w-100",
      "text-center",
      "py-2"
    );
    span.id = "error_span";
    parent.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 3000);
  }
}
