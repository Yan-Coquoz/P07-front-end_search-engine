import { recipes } from "../data/recipes.js";
import { CardRecipes } from "../models/CardRecipes.js";
import { SearchBar } from "../models/SearchBar.js";
import { SearchByTag } from "../models/SearchByTag.js";
export class MainApp {
  constructor() {
    this.articleCardContainer = document.querySelector("#card_container");
  }
  /**
   * Affichage de la barre de recherche
   * @return {HTMLElement}
   */
  displaySearchBar() {
    const container = document.querySelector("#searching_bar");
    const form = document.createElement("form");
    const searchContaint = new SearchBar().searchBarRenderDom();
    form.appendChild(searchContaint);
    container.appendChild(form);
  }
  /**
   * Affichage des tags de recherche
   * @return {HTMLElement}
   */
  displaySearchByTag() {
    const container = document.querySelector("#searching_bar");
    const form = document.createElement("form");
    const tagElement = new SearchByTag().SearchByTagRenderDom();

    form.appendChild(tagElement);
    container.appendChild(form);
  }
  /**
   * Affichage des cartes de recettes
   * @return {HTMLElement}
   */
  displayCardRecipes() {
    recipes.forEach((element) => {
      this.articleCardContainer.appendChild(
        new CardRecipes(element).CardRenderDom()
      );
    });
  }
  /**
   * Appel des différentes methodes d'affichage du DOM
   * @return {HTMLElement}
   */
  init() {
    this.displaySearchBar();
    this.displaySearchByTag();
    this.displayCardRecipes();
  }
}
const app = new MainApp();
app.init();
