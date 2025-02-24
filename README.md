# Création d’algorithmes de recherche

- ![Author](<https://img.shields.io/badge/Author-Yan Coquoz-">)
- ![GitHub repo size](<https://img.shields.io/github/repo-size/Yan-Coquoz/P07-front-end_search-engine>)  

Lancement du projet `./index.html`

## Pour le projet

- Utilisation des classes.
- Utilisation des design patterns.
- Mise en place Eslint et Prettier.
- Mise en place de Bootstrap (optionnel).
- JSDoc

## Investigation

- [Diagramme d'activité](./public/docs/P07%20Search%20BDD.drawio.png)
- [Fiche d'investigation](https://docs.google.com/document/d/1CNqJkfKX0z9X5e4po4bgkRfzjJ1wti2oZy2nK9p7_lo/edit)
- Test de performance sur [JSBen.ch](https://jsben.ch/)
- Test de performance sur [JSBench.me](https://jsbench.me/)
- Mes différents tests dans les fichiers :
  - [Perf divers](./sandbox/searchPerf.js)
  - [Les boucles](./sandbox/loopPerf.js)
  - [SearchBar tests](./sandbox/optionsTest.js)

## SearchBar

- Permet de faire une recherche par titre, ingredients ou à partir de la description.
- Se déclenche à partir de 3 caractères.

## Recherche par tag

- Par ingredients, appareils et ustensiles.
- Par un champs.
- Par mots clés.
- Les mots clé sélectionnés doivent êtres supprimé du dropdown.
- Selon les mots clés choisi, les recettes se mettent à jour.

## jsDoc

````bash
npm run jsdoc
````

[tuto d'installation de la JSDoc](https://github.com/Yan-Coquoz/tuto-perso)

TODO - la prise en compte de la recherche des tags s'il y a des élément présent dans les inputs search bar ou input tag.
