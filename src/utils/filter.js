import { recipes } from "../data/recipes.js";
import { reloadCard, suggestionDOM } from "./reloadTagDOM.js";
import { dispatchTagDOM } from "./dispatch.js";

/**
 * Recherche par ingrédients (input tag)
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
    filteredSuggestion("blue", getSuggests);
    reloadCard(recipesIngredients);
  }
}

/**
 * Recherche par appareils (input tag)
 * @param {string} element
 * @returns {arrayOfObject}
 */
export function searchAppareil(element) {
  const appareils = recipes.filter((app) => {
    return app.appliance.toLowerCase().includes(element.toLowerCase());
  });

  appareils.length === 0 ? ErrorInTagInput() : reloadCard(appareils);
  filteredSuggestion("green", appareils);
}

/**
 * Recherche par ustensiles (input tag)
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
  filteredSuggestion("red", recipesUstensiles);
}

// Dropdown Tags
/**
 * recherches tout les ingredients pour le dropdown
 */
export function searchAllIngredient() {
  const allIngredients = [];
  recipes.forEach((props) => {
    props.ingredients.forEach((i) => {
      allIngredients.push(i.ingredient.toLowerCase());
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
    allAppareils.push(app.appliance.toLowerCase());
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
      allUstensiles.push(u.toLowerCase());
    });
  });
  const ustensiles = arrayCleaner(allUstensiles);
  dispatchTagDOM("ustensile", ustensiles);
}

/**
 * Selon la couleur et le tag selectionné, créer un nouveau tableau (suggestion tag)
 * @param {string} color
 * @param {array} arr tableau selon ce qui est entrée dans le champs
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

/**
 * Nettoye le tableau de ses doublons
 * @param {array} arrays
 * @returns {array}
 */
export function arrayCleaner(arrays) {
  return arrays.filter(function (item, next) {
    return arrays.indexOf(item) == next;
  });
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

// NOTE faire une fonction qui met a jour le dropdown et met à jour les recettes
// NOTE A la selection du tag, Je met a jour le tableau rendu du dropdown ainsi que les nouvelles recettes possible

// TODO Ajouter une fonction qui nettoie le dropdown
/**
 * Recuppere les recettes selon les tags demandé
 * @param {string} color
 * @param {string} value
 * @return {arrayOfObject} tableau des recettes restantes
 */
export function cleanDropdown(color, value) {
  // TODO faire de boucles selon la valeur recherchée pour en resortir un tableau de nouvelle recetttes puis les envoyé dans dispatchTagDom()
}
