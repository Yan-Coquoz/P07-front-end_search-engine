import { CardRecipes } from "../models/CardRecipes.js";
import { arrayCleaner } from "./filter.js";

/**
 * Nouveau rendu selon le type de recherche
 * @param {array} arr
 */
export function reloadCard(arr) {
  const containerArticles = document.querySelector("#card_container ");
  document.querySelectorAll("article.card").forEach((element) => {
    element.remove();
  });
  if (arr.length > 0) {
    arr.forEach((newArray) => {
      containerArticles.appendChild(new CardRecipes(newArray).CardRenderDom());
    });
  }
}

/**
 * retourne tout les tags
 * @param {array} tab un tableau de string
 * @returns {HTMLElement}
 */
export function dropdownTagItem(color, tab) {
  const ul = document.querySelector(`#ul-${color}`);
  for (const element of tab) {
    const li = document.createElement("li");
    li.classList.add("dropdown-item", "text-light");
    li.textContent = element;
    ul.appendChild(li);
  }
}

export function suggestion(color, arr) {
  // TODO deplacé la fonction ou la condition de >=3
  const input = document.querySelector("#ingredient");
  const list = document.querySelector(`.datalistBlue`);
  const allSuggests = [];
  let datas = [];

  // je recup la valeurs des objets
  if (color == "blue") {
    arr.forEach((item) => {
      for (const key in item) {
        const element = item[key];
        allSuggests.push(element.ingredient.toLowerCase());
      }
    });
  }

  datas = arrayCleaner(allSuggests);
  console.log("input value ", input.value);
  datas.forEach((item) => {
    const option = document.createElement("option");
    option.setAttribute("value", `${item}`);
    list.appendChild(option);
  });
  if (input.value.length < 3) {
    console.log("vide");
    document.querySelectorAll("option").forEach((ele) => {
      ele.remove();
    });
  }
}
