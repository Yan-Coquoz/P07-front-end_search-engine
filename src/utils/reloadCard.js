import { CardRecipes } from "../models/CardRecipes.js";

/**
 * Nouveau rendu selon le type de recherche
 * @param {array} newArray
 */
export function reloadCard(newArrays) {
  const containerArticles = document.querySelector("#card_container ");
  document.querySelectorAll("article.card").forEach((element) => {
    element.remove();
  });
  if (newArrays.length > 0) {
    newArrays.forEach((newArray) => {
      containerArticles.appendChild(new CardRecipes(newArray).CardRenderDom());
    });
  }
}
