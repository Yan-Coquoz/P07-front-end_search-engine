export class SearchBar {
  constructor() {
    this.icon = "../../public/assets/search.svg";
  }
  searchBarRenderDom() {
    const form = document.createElement("form");
    const div = document.createElement("div");

    div.innerHTML = `<div class="searching__bar">
                <label for="search-bar"></label>
                <div class="input-group">
                <input type="text" class="form-control form-control-lg" id="search-bar" name="search-bar"
                placeholder="Rechercher une recette">
                <img src="${this.icon}" class="input-group-addon" >
                </div>
             </div>`;
    console.log(this.icon);
    form.classList.add("search", "col-12");
    return form.appendChild(div);
  }
}
