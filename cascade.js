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

/// TEST
// aplatir un array
const nbr = [[1, 5], [2, 8], 6, 9, [7, [3, 4]]];
console.log(nbr);
console.log(nbr.flat(Infinity));

// suppression d'un élément du tableau
const arrayName = ["bob", "jane", "izack", "raphael", "isa"];
const nbx = arrayName.indexOf("jane");
console.log(nbx);
if (nbx !== -1) {
  // indexOf retroune -1 si l'element n'est pas trouvé dans le tableau
  arrayName.splice(nbx, 1); // splice avec -1 supprime le dernier élément du tableau
}
console.log(arrayName);
