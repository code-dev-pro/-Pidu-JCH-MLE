# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Conventions de Commit

Ce projet utilise des conventions de commit standardisées avec Husky et Commitlint. Chaque message de commit doit suivre le format suivant :

```
<type>: <description>
```

Les types autorisés sont :

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Modification de la documentation
- `style`: Formatage du code (espaces, point-virgules, etc.)
- `refactor`: Refactorisation du code
- `test`: Ajout ou modification de tests
- `chore`: Tâches de maintenance

Exemples :

```bash
git commit -m "feat: ajouter la connexion OAuth"
git commit -m "fix: corriger le problème d'affichage sur mobile"
git commit -m "docs: mettre à jour la documentation API"
```

Si votre commit ne suit pas ces conventions, il sera automatiquement rejeté par Husky.

## Conventions de Code

### Formatage (Prettier)

Le projet utilise Prettier pour un formatage de code cohérent. La configuration se trouve dans `.prettierrc` :

- Pas de point-virgule
- Guillemets simples
- Indentation de 2 espaces
- Longueur maximale de ligne : 100 caractères
- Virgules en fin de ligne (ES5)
- Guillemets doubles pour JSX

Pour formater manuellement :

```bash
# Formater tous les fichiers
yarn format

# Vérifier le formatage sans modifier les fichiers
yarn format:check
```

### Linting (ESLint)

ESLint est configuré avec :

- Support TypeScript
- Règles React et React Hooks
- Intégration Prettier
- Configuration moderne (ESM)

Pour lancer le linting :

```bash
yarn lint
```
