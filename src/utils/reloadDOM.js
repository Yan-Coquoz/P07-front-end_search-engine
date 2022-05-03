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
  /*
   * empêche la creation supplémentaire d'une liste au cas ou elle soit déjà présente.
   */
  if (!document.querySelector(`#ul-${color} li.dropdown-item`)) {
    for (const element of tab) {
      const li = document.createElement("li");
      li.classList.add("dropdown-item", "text-light");
      li.textContent = element;
      ul.appendChild(li);
    }
  }
}

export function suggestion(color, arr) {
  const input = document.querySelector(`input.${color}`);
  const list = document.querySelector(`.datalist_${color}`);
  const allSuggests = [];
  let datas = [];

  // je recup la valeurs des objets
  if (color === "blue") {
    arr.forEach((item) => {
      for (const key in item) {
        const element = item[key];
        allSuggests.push(element.ingredient.toLowerCase());
      }
    });
  } else if (color === "green") {
    arr.forEach((item) => {
      allSuggests.push(item.appliance.toLowerCase());
    });
  } else if (color === "red") {
    arr.forEach((ust) => {
      for (let item of ust.ustensils) {
        allSuggests.push(item.toLowerCase());
      }
    });
  }

  datas = arrayCleaner(allSuggests);
  console.log(datas);
  datas.forEach((item) => {
    if (!document.querySelector(`[value="${item}"]`)) {
      const option = document.createElement("option");
      option.setAttribute("value", `${item}`);
      list.appendChild(option);
    }
  });
  // TODO supprimer les balises options
  if (input.value.length < 3) {
    document.querySelectorAll("option").forEach((ele) => {
      ele.remove();
    });
  }
}
