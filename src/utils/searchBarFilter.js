import { recipes } from "../data/recipes.js";

// 1) recherche à partir de 3 caractères
// 2) recherche dansle titre de la recette
// 3) recherche dans les ingredients
// 4) recherche dans les descriptions

/**
 * Récupère les Objets dont le titre correspond à l'input
 * @param {string} item valeur de retour de l'input
 */
export function findByTitle(item) {
  const titles = [];

  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].name.toLocaleLowerCase().includes(item)) {
      titles.push(recipes[index]);
    }
  }

  // console.log(titles);
}

export function findByDesc(item) {
  const descs = [];
  for (let index = 0; index < recipes.length; index++) {
    if (recipes[index].description.toLocaleLowerCase().includes(item)) {
      descs.push(recipes[index]);
    }
  }
  // console.log(descs);
}

export function findByIngredient(item) {
  const ingredientArrays = [];
  for (let index = 0; index < recipes.length; index++) {
    const elements = recipes[index].ingredients;
    for (let j = 0; j < elements.length; j++) {
      if (elements[j].ingredient.toLocaleLowerCase().includes(item)) {
        ingredientArrays.push(recipes[index]);
      }
    }
  }
  console.log(ingredientArrays);
}
