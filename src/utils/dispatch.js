import { searchAppareil, searchIngredient, searchUstensile } from "./filter.js";

/**
 * @param {KeyboardEvent} evt
 */
export function selected(evt) {
  const element = evt.target.id;

  if (evt.target.value.length >= 3) {
    switch (element) {
      case "ingredient":
        const ingredient = evt.target.value;
        searchIngredient(ingredient);
        break;
      case "appareil":
        const appareil = evt.target.value;
        searchAppareil(appareil);
        break;
      case "ustensile":
        const ustensile = evt.target.value;
        searchUstensile(ustensile);
        break;
    }
  }
  document.removeEventListener("input", this.selected);
}
