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
    const titleBox = document.createElement("div");
    const timeBloc = document.createElement("div");
    const title = document.createElement("h2");
    const time = document.createElement("span");
    const icon = document.createElement("img");
    const descBloc = document.createElement("div");
    const ingredientBox = document.createElement("ul");
    const desc = document.createElement("p");

    upperContainerImg.setAttribute("src", "./public/assets/imgRecette.svg");
    upperContainerImg.setAttribute("alt", "Photo de la recette ");

    upperContainerImg.classList.add("card-img-top");
    lowerContainer.classList.add("card-body");
    //TODO isolé la boucle
    // rendu des ingredients
    for (const props in this.ingredients) {
      const baseObject = this.ingredients[props];
      const ingredient = baseObject.ingredient;
      const li = document.createElement("li");
      li.classList.add("list-inline-none");
      const strong = document.createElement("strong");
      let quantity, unit, quantityString;

      if (baseObject.quantite || baseObject.quantity) {
        quantity = baseObject.quantity
          ? baseObject.quantity
          : baseObject.quantite;
      }
      if (baseObject.unit) {
        unit = baseObject.unit;
      }
      strong.classList.add("list_ingredient");
      strong.textContent = `${ingredient} `;
      quantityString = `: ${quantity}`;
      const contentProps = ` ${quantity ? quantityString : ""} ${
        unit ? unit : ""
      }`;

      li.textContent = contentProps;
      li.insertAdjacentElement("afterbegin", strong);
      ingredientBox.appendChild(li);
    }

    icon.setAttribute("src", "./public/assets/clock.svg");
    icon.setAttribute("alt", "icone d'horloge");

    //classe Bootstrap
    article.classList.add("card", "g-4", "overflow-hidden");
    descBloc.classList.add(
      "desc_bloc",
      "d-flex",
      "flex-row",
      "justify-content-between",
      "overflow-hidden",
      "my-2"
    );
    ingredientBox.classList.add("col-5", "mb-0", "list-inline", "w-50");
    desc.classList.add("col-5", "m-0");
    icon.classList.add("p-0");
    titleBox.classList.add("d-flex", "justify-content-between", "fw-bold");
    timeBloc.classList.add("w-50", "text-end");
    title.classList.add("card-title", "fw-bold");

    title.textContent = this.name;
    time.textContent = ` ${this.time} min`;

    // TODO isolé la condition
    if (this.description.length >= 165) {
      const text = this.description.slice(0, 150) + "...";
      desc.textContent = text;
    } else {
      desc.textContent = this.description;
    }

    timeBloc.appendChild(icon);
    timeBloc.appendChild(time);

    titleBox.appendChild(title);
    titleBox.appendChild(timeBloc);

    descBloc.appendChild(ingredientBox);
    descBloc.appendChild(desc);

    lowerContainer.appendChild(titleBox);
    lowerContainer.appendChild(descBloc);

    article.appendChild(upperContainerImg);
    article.appendChild(lowerContainer);

    return article;
  }
}
