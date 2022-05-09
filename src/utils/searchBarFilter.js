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

  console.log(titles);
}
