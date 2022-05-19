import { dispatchSearchBar } from "../utils/dispatch/dispachSearchbar.js";
export class SearchBar {
  /**
   * @returns {HTMLElement}
   */
  searchBarRenderDom() {
    const container = document.querySelector("#searching_bar");
    const div = document.createElement("div");
    const icon = "./public/assets/search.svg";

    div.innerHTML = `
                  <label for="search-bar"></label>
                  <div class="input-group">
                    <input type="text" class="form-control form-control-lg " 
                id="search-bar" name="search-bar"
                placeholder="Recherche par titre, ingredient ou description">
                    <img src="${icon}" class="input-group-addon" alt="icone de recherche">
                  </div>
             `;
    div.classList.add("search", "col-12");

    div
      .querySelector("#search-bar")
      .addEventListener("input", dispatchSearchBar);

    return container.appendChild(div);
  }
}
