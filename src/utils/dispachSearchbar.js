import { findByTitle } from "./searchBarFilter.js";
export function dispatchSearchBar(evt) {
  const entry = evt.target.value;
  const regexTest = /[A-Zàéèç]/gi;
  if (regexTest.test(entry)) {
    console.log("correspond");
    if (entry.length >= 3) {
      console.log("Je lance mes recherches");
      findByTitle(entry.toLowerCase());
    }
  } else {
    console.log("ne correspond pas");
  }
}
