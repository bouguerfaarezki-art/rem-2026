# Quiz de révision REM

Site de quiz pour réviser le titre professionnel **Responsable d’établissement marchand (REM)**, à partir des fiches de révision de Bruno Lenne (ACT Formation 2026).

- 6 thèmes : titre REM, marchandisage d’organisation, séduction et communication, cadre juridique, gestion de stock, calculs de l’examen
- 217 questions (QCM et vrai/faux) + 32 types d’exercices de calcul dont les chiffres changent à chaque partie
- Quiz par thème, examen blanc chronométré (30 questions en 30 min), révision des erreurs
- Correction expliquée, note sur 20, meilleurs scores gardés dans le navigateur
- Fiche formules

## Mettre le site en ligne avec GitHub Pages

1. Créez un nouveau dépôt sur GitHub (par exemple `quiz-rem`), en **public**.
2. Cliquez sur **Add file → Upload files** et glissez **tous les fichiers de ce dossier** (`index.html`, `style.css`, `app.js`, `questions.js`, `calculs.js`, `logo.png`, `README.md`). Validez avec **Commit changes**.
3. Allez dans **Settings → Pages**. Dans **Source**, choisissez **Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**. Cliquez sur **Save**.
4. Après une ou deux minutes, le site est en ligne à l’adresse `https://VOTRE-PSEUDO.github.io/quiz-rem/`.

## Modifier ou ajouter des questions

Tout se trouve dans `questions.js`. Une ligne = une question :

```js
qcm("stock", "Question ?", ["Bonne réponse", "Mauvaise 1", "Mauvaise 2", "Mauvaise 3"], "Explication affichée après la réponse.");
vf("juri", "Affirmation à juger.", false, "Explication.");
```

La bonne réponse d’un QCM est toujours la première de la liste ; l’ordre est mélangé à l’affichage.
Les thèmes sont : `rem`, `orga`, `seduc`, `juri`, `stock`, `calc`.

Les exercices de calcul sont dans `calculs.js`.

## Tester sur son ordinateur

Il suffit d’ouvrir `index.html` dans un navigateur, sans rien installer.
