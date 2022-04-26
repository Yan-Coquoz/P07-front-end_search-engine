export class SearchBar {
  constructor() {
    this.icon = "../../public/assets/search.svg";
  }
  /**
   * @returns {HTMLElement}
   */
  searchBarRenderDom() {
    const form = document.querySelector("#searching_bar");
    const div = document.createElement("div");

    div.innerHTML = `
                <label for="search-bar"></label>
                <div class="input-group">
                <input type="text" class="form-control form-control-lg" id="search-bar" name="search-bar"
                placeholder="Rechercher une recette">
                <img src="${this.icon}" class="input-group-addon" >
                </div>
             `;
    div.classList.add("search", "col-12");

    return form.appendChild(div);
  }
}
