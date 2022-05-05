import { CardRecipes } from "../models/CardRecipes.js";
import {
  arrayCleaner,
  searchAppareil,
  searchIngredient,
  searchUstensile,
} from "./filter.js";
import { dispatchGetElementInList } from "./dispatch.js";

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
 * retourne tout les tags (modale)
 * @param {array} tab un tableau de string
 * @returns {HTMLElement}
 */
export function dropdownTagItem(color, tab) {
  const ul = document.querySelector(`#ul-${color}`);
  /*
   * empêche la création supplémentaire d'une liste au cas ou elle soit déjà présente.
   */
  if (!document.querySelector(`#ul-${color} li.dropdown-item`)) {
    for (const element of tab.sort()) {
      const li = document.createElement("li");
      li.classList.add("dropdown-item", "text-light");
      li.textContent = element.replace(/^./, element[0].toUpperCase());
      ul.appendChild(li);
    }
  }
  document.querySelectorAll("li.dropdown-item").forEach((elt) => {
    elt.addEventListener("click", dispatchGetElementInList);
  });
}

/**
 * Propse des suggestions lors du remplissage du champs des tags
 * @param {string} color
 * @param {array} arr
 */
export function suggestion(color, arr) {
  // TODO S.O.C.
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

  datas.forEach((item) => {
    if (!document.querySelector(`[value="${item}"]`)) {
      const option = document.createElement("option");
      option.setAttribute("value", `${item}`);
      list.appendChild(option);
    }
  });

  if (input.value.length === 0 || input.value === "") {
    document.querySelectorAll("option").forEach((ele) => {
      ele.remove();
    });
  }
}

export function addSelectTag(color, element) {
  const couleur = color.slice(3);

  const ul = document.querySelector(`.ul_tag`);
  const li = document.createElement("li");
  const img = document.createElement("img");

  img.setAttribute("src", "../../public/assets/close.svg");
  img.setAttribute("alt", "close");
  li.classList.add("ul_tag--li");

  switch (couleur) {
    case "blue":
      li.classList.add("bg-primary", "mx-1");
      searchIngredient(element);
      break;
    case "green":
      li.classList.add("bg-success", "mx-1");
      searchAppareil(element);
      break;
    case "red":
      li.classList.add("bg-danger", "mx-1");
      searchUstensile(element);
      break;
  }

  li.style.color = "white";
  li.textContent = element;
  // TODO empecher la duplication de la création du tag
  li.appendChild(img);
  ul.appendChild(li);

  img.addEventListener("click", () => {
    li.remove();
  });
}
