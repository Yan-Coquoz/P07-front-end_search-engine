import { findByDesc, findByTitle } from "./searchBarFilter.js";
export function dispatchSearchBar(evt) {
  const entry = evt.target.value;
  const regexTest = /[A-Zàéèç]/gi;
  if (regexTest.test(entry) && entry.length >= 3) {
    findByTitle(entry.toLowerCase());
    findByDesc(entry.toLowerCase());
  } else {
    console.log("ne correspond pas");
  }
}
