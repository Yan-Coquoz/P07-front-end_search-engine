import { selected, callTags } from "../utils/dispatch.js";

export class SearchByTag {
  /**
   * @returns {HTMLElement}
   */
  SearchByTagRenderDom() {
    const container = document.querySelector("#searching_bar");
    const div = document.createElement("ul");
    div.innerHTML = `<!-- ingredient -->
      <li class="sort__blue list-inline-item btn-group w-100">                    
        <button type="button" class="btn btn-primary ">
          <div class="input-group ">
            <input name="ingredient" class="form-control bg-primary" id="ingredient" placeholder="Ingrédients">
          </div>
        </button>
        <button type="button" id="btn-blue" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
         
        </button>                 
        <ul class="dropdown-menu bg-primary p-2 text-light" id="ul-blue">
          <li class="dropdown-item text-light">Tout les ingredients</li>
        </ul>
      </li>

                    <!-- appareils -->
      <li class="sort__green list-inline-item btn-group w-100 my-3 my-sm-0">                    
        <button type="button" class="btn btn-success ">
          <div class="input-group ">
          <input name="appareils" class="form-control bg-success" id="appareil" placeholder="Appareils">
          </div>
        </button>
        <button type="button" id="btn-green" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
         
        </button>                 
        <ul class="dropdown-menu bg-success p-2 text-light" id="ul-green">
          <li class="dropdown-item text-light">Tout les appareils</li>
        </ul>
      </li>
                
                   <!-- ustensiles -->
      <li class="sort__red list-inline-item btn-group w-100">                    
        <button type="button" class="btn btn-danger ">
          <div class="input-group ">
          <input name="ustensiles" class="form-control bg-danger pe-3" id="ustensile" placeholder="Ustensiles">
          </div>
        </button>
        <button type="button" id="btn-red" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
         
        </button>                 
        <ul class="dropdown-menu bg-danger p-2 text-light" id="ul-red">
          <li class="dropdown-item text-light">Tout les ustensiles</li>
        </ul>
      </li>`;

    div.querySelectorAll("input").forEach((inputElement) => {
      inputElement.addEventListener("input", selected);
    });
    div.querySelectorAll("button.dropdown-toggle").forEach((btnElement) => {
      btnElement.addEventListener("click", callTags);
    });

    div.classList.add(
      "sort",
      "list-inline",
      "col",
      "col-md-12",
      "col-lg-7",
      "form-group",
      "d-sm-flex",
      "gap-sm-3",
      "py-sm-3",
      "rounded"
    );
    return container.appendChild(div);
  }
}
