import { recipes } from "../data/recipes.js";
import { CardRecipes } from "../models/CardRecipes.js";

class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector(".card_container");
  }
  displayCardRecipes() {
    recipes.forEach((element) => {
      this.articleCardContainer.appendChild(
        new CardRecipes(element).CardRenderDom()
      );
    });
  }

  init() {
    this.displayCardRecipes();
  }
}
const app = new MainApp();
app.init();
