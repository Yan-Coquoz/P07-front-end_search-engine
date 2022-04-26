import { recipes } from "../data/recipes.js";
import { CardRecipes } from "../models/CardRecipes.js";
import { SearchBar } from "../models/SearchBar.js";
import { SearchByTag } from "../models/SearchByTag.js";
class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector("#card_container");
  }

  displaySearchBar() {
    const container = document.querySelector("#searching_bar");
    const form = document.createElement("form");
    const searchContaint = new SearchBar().searchBarRenderDom();
    form.appendChild(searchContaint);
    container.appendChild(form);
  }

  displaySearchByTag() {
    const container = document.querySelector("#searching_bar");
    const form = document.createElement("form");
    const tagElement = new SearchByTag().SearchByTagRenderDom();
    // form.classList.add();

    form.appendChild(tagElement);
    container.appendChild(form);
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
    this.displaySearchByTag();
    this.displayCardRecipes();
  }
}
const app = new MainApp();
app.init();
