import { CardRecipes } from "../models/CardRecipes.js";

import {
  dispatchGetElementInList,
  dispatchAndGetColor,
} from "./dispatch/dispatchTag.js";
import { deleteTag, sortRecipes } from "./filter.js";
import { presentTags, setRecipe } from "./misc.js";

/**
 * Nouveau rendu des recettes selon le type de recherche
 * @param {array} arr nouveau tableau
 */
export function reloadCard(arr) {
  const containerArticles = document.querySelector("#card_container ");
  document.querySelectorAll("article.card").forEach((element) => {
    element.remove();
  });

  if (arr.length > 0) {
    setRecipe(arr);
    sortRecipes(arr).forEach((newArray) => {
      containerArticles.appendChild(new CardRecipes(newArray).CardRenderDom());
    });
  }
}

/**
 * retourne tout les tags (dropdown)
 * @param {string} color la couleur du tag
 * @param {array} tab un tableau de string
 * @returns {HTMLElement}
 */
export function dropdownTagItemDOM(color, tab) {
  const ul = document.querySelector(`#ul-${color}`);
  /*
   * Empêche la création supplémentaire d'une liste au cas ou elle soit déjà présente.
   */
  if (!document.querySelector(`#ul-${color} li.dropdown-item`)) {
    ul.innerHTML = "";
    for (const element of tab.sort()) {
      const li = document.createElement("li");
      li.classList.add("dropdown-item", "text-light");
      // met en capitale le 1er caractère de l'élement.
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
 * @param {string} item le nom de l'élément selectionné
 */
export function addSelectTagDOM(color, item) {
  const ul = document.querySelector(`.ul_tag`);
  const li = document.createElement("li");
  const img = document.createElement("img");
  const bootstrapColor = dispatchAndGetColor(color, item);

  img.setAttribute("src", "./public/assets/close.svg");
  img.setAttribute("alt", "close");
  img.classList.add(`${color}`, "close");
  li.classList.add("ul_tag--li", "mx-1");

  li.classList.add(bootstrapColor);

  li.style.color = "white";
  li.textContent = item;

  li.appendChild(img);
  ul.appendChild(li);
  presentTags.push(item.toLowerCase());
  img.addEventListener("click", deleteTag);
}

/**
 * Créer un message d'erreur en cas de non concordance
 */
export function ErrorInTagInput(text) {
  //"Il n'y a pas d'éléments correspondant à votre recherche"
  const parent = document.querySelector("#searching_bar");
  if (!document.getElementById("error_span")) {
    const span = document.createElement("span");

    span.textContent = text;
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

export function ErrorInSearchBar() {
  const div = document.querySelector(".carte");
  const span = document.createElement("span");
  if (!document.querySelector(".error_seachbar")) {
    span.textContent = `« Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc.`;
    span.classList.add("text-danger", "fw-bold", "error_seachbar");
    div.insertAdjacentElement("afterbegin", span);
  }
  setTimeout(() => {
    span.remove();
  }, 3000);
}
