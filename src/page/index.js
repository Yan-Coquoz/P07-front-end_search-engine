import { recipes } from "../data/recipes.js";
import { CardRecipes } from "../models/CardRecipes.js";
import { SearchBar } from "../models/SearchBar.js";
class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector("#card_container");
  }

  displaySearchBar() {
    const container = document.querySelector("#searching_bar");
    const searchContaint = new SearchBar().searchBarRenderDom();
    container.append(searchContaint);
  }

  displayCardRecipes() {
    recipes.forEach((element) => {
      this.articleCardContainer.appendChild(
        new CardRecipes(element).CardRenderDom()
      );
    });
  }

  init() {
    this.displaySearchBar();
    this.displayCardRecipes();
  }
}
const app = new MainApp();
app.init();
