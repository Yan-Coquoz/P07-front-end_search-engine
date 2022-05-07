/**
 * supprime tous les élément du dropdown
 */
export function cleanDropdown() {
  document.querySelectorAll("li.dropdown-item").forEach((item) => {
    item.remove();
  });
}

/**
 * Créer un message d'erreur en cas de non concordance
 */
export function ErrorInTagInput() {
  const parent = document.querySelector("#searching_bar");
  if (!document.getElementById("error_span")) {
    const span = document.createElement("span");
    const errorText = "Rien ne correspond à votre recherche";
    span.textContent = errorText;
    span.classList.add(
      "text-danger",
      "fw-bold",
      "w-100",
      "text-center",
      "py-2"
    );
    span.id = "error_span";
    parent.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 3000);
  }
}

/**
 * Nettoye le tableau de ses doublons
 * @param {array} arrays
 * @returns {array}
 */
export function arrayCleaner(arrays) {
  return arrays.filter(function (item, next) {
    return arrays.indexOf(item) == next;
  });
}
