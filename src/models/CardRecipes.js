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
    const ingredient = document.createElement("div");
    const desc = document.createElement("p");

    upperContainer.classList.add("article__upper-container");
    lowerContainer.classList.add("article__lower-container");

    console.log(this.ingredients.length); // un tableau d'Objet
    for (const key in this.ingredients) {
      console.log(Object.hasOwnProperty.call(this.ingredients, key));
      if (Object.hasOwnProperty.call(this.ingredients, key)) {
        const element = this.ingredients[key];
        console.log(element);
      }
    }

    title.textContent = this.name;
    time.textContent = this.time;
    desc.textContent = this.description;

    timeBloc.appendChild(time);
    timeBloc.appendChild(icon);
    title.appendChild(timeBloc);
    descBloc.appendChild(ingredient);
    descBloc.appendChild(desc);
    lowerContainer.appendChild(title);
    lowerContainer.appendChild(descBloc);
    article.appendChild(upperContainer);
    article.appendChild(lowerContainer);
    return article;
  }
}
