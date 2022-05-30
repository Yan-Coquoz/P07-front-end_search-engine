import { arrayCleaner, setRecipe } from "../misc.js";
import { reloadCard } from "../reloadDOM.js";

const recettes = [];

export function reloadCascadTag(color, item, arr) {
  if (color === "blue") {
    arr.forEach((obj) => {
      obj.ingredients.filter((ing) => {
        if (ing.ingredient.toLowerCase().includes(item.toLowerCase())) {
          recettes.push(obj);
        }
      });
    });
  }

  appareilTag(color, item, arr);
}

export function appareilTag(color, item, arr) {
  if (color === "green") {
    arr.filter((obj) => {
      if (obj.appliance.toLowerCase().includes(item.toLowerCase())) {
        recettes.push(obj);
      }
    });
  }

  ustensilTag(color, item, arr);
}

export function ustensilTag(color, item, arr) {
  if (color === "red") {
    arr.forEach((obj) => {
      obj.ustensils.filter((ust) => {
        if (ust.toLowerCase().includes(item.toLowerCase())) {
          recettes.push(obj);
        }
      });
    });
  }
  setRecipe(arrayCleaner(recettes));
  reloadCard(arrayCleaner(recettes));
}
