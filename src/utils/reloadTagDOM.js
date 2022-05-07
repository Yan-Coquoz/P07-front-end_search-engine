import { CardRecipes } from "../models/CardRecipes.js";
import { searchAppareil, searchIngredient, searchUstensile } from "./filter.js";
import { dispatchGetElementInList } from "./dispatch.js";

/**
 * Nouveau rendu des recettes selon le type de recherche
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
 * retourne tout les tags (dropdown)
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
 * Propose des suggestions lors du remplissage du champs des tags
 * @param {string} color
 * @param {array} arr tableau selon ce qui est entrée dans le champs
 */
export function suggestionDOM(color, arr) {
  const input = document.querySelector(`input.${color}`);
  const list = document.querySelector(`.datalist_${color}`);

  arr.forEach((item) => {
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

/**
 * Création du tag
 * @param {string} color la couleur du type de tag
 * @param {string} element le nom de l'élément selectionné
 */
export function addSelectTag(color, element) {
  const ul = document.querySelector(`.ul_tag`);
  const li = document.createElement("li");
  const img = document.createElement("img");

  img.setAttribute("src", "../../public/assets/close.svg");
  img.setAttribute("alt", "close");
  li.classList.add("ul_tag--li", "mx-1");

  switch (color) {
    case "blue":
      li.classList.add("bg-primary");
      searchIngredient(element);
      break;
    case "green":
      li.classList.add("bg-success");
      searchAppareil(element);
      break;
    case "red":
      li.classList.add("bg-danger");
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
