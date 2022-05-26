import { arrayCleaner, setRecipe } from "../misc.js";
import { reloadCard } from "../reloadDOM.js";

const recettes = [];
// const ings = [];
// const apps = [];
// const usts = [];

export function reloadCascadTag(color, item, arr) {
  if (color === "blue") {
    arr.forEach((obj) => {
      obj.ingredients.filter((ing) => {
        if (ing.ingredient.toLowerCase().includes(item.toLowerCase())) {
          recettes.push(obj);
          //   ings.push(ing.ingredient.toLowerCase());
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
        // apps.push(obj.appliance.toLowerCase());
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
          //   usts.push(ust.toLowerCase());
        }
      });
    });
  }
  setRecipe(arrayCleaner(recettes));
  reloadCard(arrayCleaner(recettes));
}
