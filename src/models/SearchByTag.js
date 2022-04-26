export class SearchByTag {
  constructor() {
    this.icon = "../../public/assets/dropdown.svg";
    this.selected = this.selected.bind(this);
  }
  /**
   * @returns {HTMLElement}
   */
  SearchByTagRenderDom() {
    const container = document.querySelector("#searching_bar");
    const div = document.createElement("div");
    div.innerHTML = `<!-- ingredient -->
                    <div class="sort__blue input-group col-4 py-2">
                        <input name="ingredient" class="form-control bg-primary " id="ingredient" placeholder="Ingrédients">
                        <img src="${this.icon}" alt="icone tête de flèche">

                    </div>
                    <!-- appareils -->
                    <div class="sort__green input-group col-4 py-2">
                        <input name="appareils" class="form-control bg-success " id="appareil" placeholder="Appareils">
                        <img src="${this.icon}" alt="icone tête de flèche">
                    </div>
                    <!-- ustensiles -->
                    <div class="sort__red input-group col-4 py-2">
                        <input name="ustensiles" class="form-control bg-danger  " id="ustensile" placeholder="Ustensiles">
                        <img src="${this.icon}" alt="icone tête de flèche">
                    </div>`;

    div.querySelectorAll("input").forEach((inputElement) => {
      inputElement.addEventListener("input", this.selected);
    });

    div.classList.add("sort", "col-12", "col-sm-4", "form-group");
    return container.appendChild(div);
  }
  /**
   * @param {KeyboardEvent} evt
   */
  selected(evt) {
    switch (evt.target.id) {
      case "ingredient":
        console.log("ingredient", evt.target.value);
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
