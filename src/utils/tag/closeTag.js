import { arrayCleaner, presentTags, setRecipe } from "../misc.js";
import { reloadCard } from "../reloadDOM.js";

/**
 * tableau temporaire pour stocké les recettes ou les tags apparaissent.
 * @type {arrayOfObject}
 */
const recettes = [];

/**
 *
 * @param {string} color couleur du tag
 * @param {string} item élément de la recherche
 * @param {arrayOfObject} arr tableau des recettes
 */
export function reloadCascadTag(item, arr) {
  if (presentTags.length === 0) {
    console.log("zero");
    recettes.length = 0;
  }

  arr.forEach((obj) => {
    console.log("obj ", obj);
    obj.ingredients.filter((ing) => {
      console.log("ing ", ing);
      if (ing.ingredient.toLowerCase().includes(item.toLowerCase())) {
        console.log("je trouve item");
        recettes.push(obj);
      }
    });
  });

  appareilTag(item, arr);
}

/**
 *
 * @param {string} color couleur du tag
 * @param {string} item élément de la recherche
 * @param {arrayOfObject} arr tableau des recettes
 */
export function appareilTag(item, arr) {
  arr.filter((obj) => {
    if (obj.appliance.toLowerCase().includes(item.toLowerCase())) {
      recettes.push(obj);
    }
  });

  ustensilTag(item, arr);
}

/**
 *
 * @param {string} color couleur du tag
 * @param {string} item élément de la recherche
 * @param {arrayOfObject} arr tableau des recettes
 */
export function ustensilTag(item, arr) {
  arr.forEach((obj) => {
    obj.ustensils.filter((ust) => {
      if (ust.toLowerCase().includes(item.toLowerCase())) {
        recettes.push(obj);
      }
    });
  });

  setRecipe(arrayCleaner(recettes));
  reloadCard(arrayCleaner(recettes));
}
