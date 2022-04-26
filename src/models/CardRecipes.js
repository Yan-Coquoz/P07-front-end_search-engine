export class CardRecipes {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.servings = recipe.servings;
    this.ingredients = recipe.ingredients;
    this.time = recipe.time;
    this.description = recipe.description;
    this.appliance = recipe.appliance;
    this.ustensils = recipe.ustensils;
  }
  /**
   * Affichage de la carte d'une recette
   * @returns {HTMLElement}
   */
  CardRenderDom() {
    const article = document.createElement("article");
    const upperContainerImg = document.createElement("img");
    const lowerContainer = document.createElement("div");
    const timeBloc = document.createElement("div");
    const title = document.createElement("h2");
    const time = document.createElement("span");
    const icon = document.createElement("img");
    const descBloc = document.createElement("div");
    const ingredientBox = document.createElement("ul");
    const desc = document.createElement("p");

    article.classList.add("card", "g-4");
    article.style.width = "18rem";

    upperContainerImg.classList.add("card-img-top");
    upperContainerImg.setAttribute("src", "./public/assets/imgRecette.svg");
    upperContainerImg.setAttribute("alt", "Photo de la recette ");

    lowerContainer.classList.add("card-body");

    // rendu des ingredients
    for (const props in this.ingredients) {
      const baseObject = this.ingredients[props];
      const ingredient = baseObject.ingredient;
      const li = document.createElement("li");
      let quantity, unit;
      if (baseObject.quantite || baseObject.quantity) {
        quantity = baseObject.quantity
          ? baseObject.quantity
          : baseObject.quantite;
      }
      if (baseObject.unit) {
        unit = baseObject.unit;
      }
      const contentProps = ` ${ingredient} : ${quantity ? quantity : ""} ${
        unit ? unit : ""
      }`;

      li.textContent = contentProps;
      ingredientBox.appendChild(li);
    }

    title.classList.add("card-title");
    title.textContent = this.name;

    time.textContent = this.time;
    desc.textContent = this.description;

    timeBloc.appendChild(time);
    timeBloc.appendChild(icon);
    title.appendChild(timeBloc);
    descBloc.appendChild(ingredientBox);
    descBloc.appendChild(desc);
    lowerContainer.appendChild(title);
    lowerContainer.appendChild(descBloc);
    article.appendChild(upperContainerImg);
    article.appendChild(lowerContainer);

    return article;
  }
}
