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
  CardRenderDom() {
    const article = document.createElement("article");
    const upperContainer = document.createElement("div");
    const lowerContainer = document.createElement("div");
    const timeBloc = document.createElement("div");
    const title = document.createElement("h2");
    const time = document.createElement("span");
    const icon = document.createElement("span");
    const descBloc = document.createElement("div");
    const ingredientBox = document.createElement("ul");
    const desc = document.createElement("p");

    upperContainer.classList.add("article__upper-container");
    lowerContainer.classList.add("article__lower-container");

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
    article.appendChild(upperContainer);
    article.appendChild(lowerContainer);
    return article;
  }
}
