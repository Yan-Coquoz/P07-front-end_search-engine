export class SearchByTag {
  SearchByTagRenderDom() {
    const container = document.querySelector("#searching_bar");
    const div = document.createElement("div");
    div.innerHTML = `<!-- ingredient -->
                    <div class="sort__blue py-2">
                        <select name="ingredient" class="form-select bg-primary text-light" id="ingredient">
                            <option value="">Ingrédients</option>
                        </select>
                    </div>
                    <!-- appareils -->
                    <div class="sort__green  py-2">
                        <select name="appareils" class="form-select bg-success text-light" id="appareils">
                            <option value="">Appareils</option>
                        </select>
                    </div>
                    <!-- ustensiles -->
                    <div class="sort__red  py-2">
                        <select name="ustensiles" class="form-select bg-danger text-light " id="ustensiles">
                            <option value="">Ustensiles</option>
                        </select>
                    </div>`;

    div.classList.add("sort", "col-12", "col-sm-4");
    return container.appendChild(div);
  }
}
