# Création d'alogrithmes de recherche

![GitHub repo size](https://img.shields.io/github/repo-size/Yan-Coquoz/P07-front-end-search-engine)  
Lancement du projet `./index.html`

## Pour le projet

- Utilisation des classes.
- Utilisation des design patterns.
- Mise en place Eslint et Prettier.
- Mise en place de Bootstrap (optionnel).
- JSDoc

## Investigation

- [Diagramme d'activité](https://app.diagrams.net/?libs=general;flowchart#G1jY3R4fk_gseolrlvcdd6jIMq_qhmJB2C)
- [Fiche d'investigation](https://docs.google.com/document/d/1CNqJkfKX0z9X5e4po4bgkRfzjJ1wti2oZy2nK9p7_lo/edit)
- Test de performance sur [JSBench](https://jsben.ch/)
- Mes differents tests dans le fichier [searchPerf](searchPerf.js)

## SearchBar

- Permet de faire une recherche par titre, ingredients ou à partir de la description.
- Se déclanche à partir de 3 caractères.

## Recherche par tag

- Par ingredients, appareils et ustensiles.
- Par un champs.
- Par mots clés.
- Les mots clé séléctionnés doivent êtres supprimé du dropdown.
- Selon les mots clés choisi, les recettes se mettent à jour.
