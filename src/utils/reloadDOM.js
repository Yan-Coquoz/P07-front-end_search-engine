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

/**
 * retourne tout les tags
 * @param {array} tab un tableau de string
 * @returns {HTMLElement}
 */
export function dropdownTagIngredient(color, tab) {
  const ul = document.querySelector(`#ul-${color}`);

  for (const element of tab) {
    const li = document.createElement("li");
    li.classList.add("dropdown-item", "text-light");
    li.textContent = element;
    ul.appendChild(li);
  }
}
