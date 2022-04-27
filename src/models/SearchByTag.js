import { searchIngredient } from "../utils/filter.js";
export class SearchByTag {
  constructor() {
    this.icon = "./public/assets/dropdown.svg";
    this.selected = this.selected.bind(this);
  }
  /**
   * @returns {HTMLElement}
   */
  SearchByTagRenderDom() {
    const container = document.querySelector("#searching_bar");
    const div = document.createElement("ul");
    div.innerHTML = `<!-- ingredient -->
                    <li class="sort__blue list-inline-item input-group ">
                        <input name="ingredient" class="form-control bg-primary " id="ingredient" placeholder="Ingrédients">
                        <img src="${this.icon}" alt="icone chevron">
                        </li>
                        <div class="dropdown bg-primary shadow rounded p-2 ">jj</div>
                    <!-- appareils -->
                    <li class="sort__green list-inline-item input-group my-2 my-sm-0">
                        <input name="appareils" class="form-control bg-success " id="appareil" placeholder="Appareils">
                        <img src="${this.icon}" alt="icone chevron">
                        </li>
                        <div class="dropdown bg-success shadow rounded p-2 ">gg</div>
                    <!-- ustensiles -->
                    <li class="sort__red list-inline-item input-group ">
                        <input name="ustensiles" class="form-control bg-danger pe-3" id="ustensile" placeholder="Ustensiles">
                        <img src="${this.icon}" alt="icone chevron">
                    </li>
                    <div class="dropdown bg-danger shadow rounded p-2 ">ff</div>`;

    div.querySelectorAll("input").forEach((inputElement) => {
      inputElement.addEventListener("input", this.selected);
    });

    div.classList.add(
      "sort",
      "list-inline",
      "col-12",
      "col-md-7",
      "form-group",
      "d-sm-flex",
      "gap-sm-3",
      "py-sm-3",
      "rounded"
    );
    return container.appendChild(div);
  }
  /**
   * @param {KeyboardEvent} evt
   */
  selected(evt) {
    switch (evt.target.id) {
      case "ingredient":
        const ingredient = evt.target.value;
        if (ingredient.length >= 3) {
          searchIngredient(ingredient);
        }
        break;
      case "appareil":
        console.log("appareil", evt.target.value);
        break;
      case "ustensile":
        console.log("ustensile", evt.target.value);
        break;
    }
    document.removeEventListener("input", this.selected);
  }
}
