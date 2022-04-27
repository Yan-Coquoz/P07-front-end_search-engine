import { recipes } from "../data/recipes.js";

export function searchIngredient(element) {
  const recipesIngredients = [];
  recipes.map((ingred) => {
    ingred.ingredients.filter((ele) => {
      if (ele.ingredient.toLowerCase().includes(element.toLowerCase())) {
        recipesIngredients.push(ingred);
      }
    });
  });
  if (recipesIngredients.length > 0) {
    // TODO renvoyé le nouvel array
    return recipesIngredients;
  } else {
    ErrorInTagInput();
  }
}

function ErrorInTagInput() {
  const ul = document.querySelector("section.container");
  const span = document.createElement("span");
  const errorText = "Rien ne correspond à votre recherche";
  span.textContent = errorText;
  span.classList.add("text-danger", "fw-bold", "w-100", "offset-1", "py-2");
  ul.before(span);
  span.style.display = "inline-block";
  setTimeout(() => {
    span.style.display = "none";
  }, 3000);
}
