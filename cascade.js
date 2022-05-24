import { arrayCleaner } from "../misc.js";

const recettes = [];
const ings = [];
const apps = [];
const usts = [];

export function ingredientTag(color, item, arr) {
  if (color === "blue") {
    arr.forEach((element) => {
      element.ingredients.filter((ing) => {
        if (ing.ingredient.toLowerCase().includes(item.toLowerCase())) {
          recettes.push(element);
          ings.push(ing.ingredient);
        }
      });
    });
  }

  appareilTag(color, item, arr);
}

export function appareilTag(color, item, arr) {
  if (color === "green") {
    arr.filter((app) => {
      if (app.appliance.toLowerCase().includes(item.toLowerCase())) {
        recettes.push(app);
        apps.push(app.appliance);
      }
    });
  }

  ustensilTag(color, item, arr);
}

export function ustensilTag(color, item, arr) {
  if (color === "red") {
    arr.forEach((element) => {
      element.ustensils.filter((ust) => {
        if (ust.toLowerCase().includes(item.toLowerCase())) {
          recettes.push(element);
          usts.push(ust);
        }
      });
    });
  }

  console.log(arrayCleaner(recettes));

  console.log(arrayCleaner(ings));
  console.log(arrayCleaner(apps));
  console.log(arrayCleaner(usts));
}
