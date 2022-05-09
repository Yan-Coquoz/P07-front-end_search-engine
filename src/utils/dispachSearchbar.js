import {
  findByDesc,
  findByIngredient,
  findByTitle,
} from "./searchBarFilter.js";
export function dispatchSearchBar(evt) {
  const entry = evt.target.value;
  const regexTest = /[A-Zàéèç]/gi;
  if (regexTest.test(entry) && entry.length >= 3) {
    findByTitle(entry.toLowerCase());
    findByDesc(entry.toLowerCase());
    findByIngredient(entry.toLowerCase());
  } else {
    console.log("ne correspond pas");
  }
  document.removeEventListener("input", dispatchSearchBar);
}
