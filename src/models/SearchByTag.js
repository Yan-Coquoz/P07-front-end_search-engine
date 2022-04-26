export class SearchByTag {
  /**
   * @returns {HTMLElement}
   */
  SearchByTagRenderDom() {
    const container = document.querySelector("#searching_bar");
    const div = document.createElement("div");
    div.innerHTML = `<!-- ingredient -->
                    <div class="sort__blue py-2">
                        <input name="ingredient" class="form-control bg-primary text-light" id="ingredient" placeholder="Ingrédients">

                    </div>
                    <!-- appareils -->
                    <div class="sort__green  py-2">
                        <input name="appareils" class="form-control bg-success text-light" id="appareils" placeholder="appareils">

                    </div>
                    <!-- ustensiles -->
                    <div class="sort__red  py-2">
                        <input name="ustensiles" class="form-control bg-danger text-light " id="ustensiles" placeholder="ustensiles">
                    </div>`;

    div.classList.add("sort", "col-12", "col-sm-4", "form-group");
    return container.appendChild(div);
  }
}
