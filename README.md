# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Démarrage Rapide

### Prérequis

- Node.js >= 18
- Yarn >= 1.22
- Git

### Installation

```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd pidu

# Installer les dépendances
yarn install

# Lancer en développement
yarn dev
```

### Scripts Disponibles

- `yarn dev` : Lance le serveur de développement
- `yarn build` : Compile le projet pour la production
- `yarn preview` : Prévisualise la version de production
- `yarn lint` : Vérifie le code avec ESLint
- `yarn format` : Formate le code avec Prettier
- `yarn format:check` : Vérifie le formatage sans modifier les fichiers

## Structure du Projet

```
pidu/
├── src/               # Code source
│   ├── components/    # Composants réutilisables
│   ├── pages/        # Pages/Routes de l'application
│   ├── hooks/        # Custom hooks
│   ├── services/     # Services (API, etc.)
│   ├── types/        # Types TypeScript
│   ├── utils/        # Fonctions utilitaires
│   └── assets/       # Images, fonts, etc.
├── public/           # Fichiers statiques
├── .husky/           # Hooks Git
├── .vscode/          # Configuration VS Code
└── config/           # Fichiers de configuration
```

## Environnement de Développement

### Configuration Recommandée

- VS Code avec les extensions suivantes :
  - ESLint
  - Prettier
  - TypeScript + JavaScript
  - GitLens (optionnel)
  - Error Lens (optionnel)

### Configuration VS Code

Ajouter dans `.vscode/settings.json` :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Debugging

1. Dans VS Code, utiliser le debugger intégré
2. Configuration pour le debugging des tests disponible
3. Pour le debugging en développement :
   - Ouvrir Chrome DevTools (F12)
   - Utiliser les React DevTools

### Problèmes Courants

1. **Erreur de type TypeScript** :

   - Vérifier que toutes les dépendances sont installées
   - Lancer `yarn install` pour mettre à jour les types

2. **Conflit de versions** :

   - Supprimer `node_modules` et `yarn.lock`
   - Relancer `yarn install`

3. **Problèmes de hook Git** :
   - Vérifier que Husky est bien installé : `yarn prepare`
   - Vérifier les permissions des scripts : `chmod +x .husky/*`

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

## Workflow Git

### Initialisation de la Structure Git

Si vous démarrez avec un nouveau dépôt, suivez ces étapes pour mettre en place la structure des branches :

1. **Créer la branche develop**

   ```bash
   # Depuis main
   git checkout main
   git checkout -b develop
   git push origin develop
   ```

2. **Protéger les branches principales**
   Dans GitHub > Settings > Branches :

   - Ajouter une règle de protection pour `main`
     - ✓ Require pull request reviews
     - ✓ Require status checks to pass
     - ✓ Include administrators
   - Faire de même pour `develop`

3. **Configurer les branches par défaut**
   Dans GitHub > Settings > Branches :

   - Définir `develop` comme branche par défaut

4. **Créer les premières branches**

   ```bash
   # Pour une fonctionnalité
   git checkout develop
   git checkout -b feature/initial-setup

   # Pour un bug fix
   git checkout develop
   git checkout -b fix/initial-fixes
   ```

5. **Mettre à jour le README**

   - Ajouter la description du workflow
   - Documenter la structure des branches
   - Commit et push sur votre branche feature

6. **Créer la première Pull Request**
   - De `feature/initial-setup` vers `develop`
   - Faire valider par l'équipe
   - Merger une fois approuvé

### Branches

- `main` : branche principale, code en production
- `develop` : branche de développement, code stable en cours de développement
- `feature/*` : branches de fonctionnalités (ex: `feature/auth`)
- `fix/*` : branches de correction de bugs (ex: `fix/login-error`)
- `release/*` : branches de préparation de release (ex: `release/1.0.0`)

### Workflow de développement

1. **Créer une nouvelle branche**

   ```bash
   # Pour une nouvelle fonctionnalité
   git checkout develop
   git pull origin develop
   git checkout -b feature/ma-fonctionnalite

   # Pour un bug fix
   git checkout -b fix/description-du-bug
   ```

2. **Développement**

   - Faire des commits réguliers avec des messages clairs
   - Suivre les conventions de commit définies
   - Formatter le code avec `yarn format` avant chaque commit

3. **Mise à jour de sa branche**

   ```bash
   # Mettre à jour sa branche avec develop
   git checkout develop
   git pull origin develop
   git checkout feature/ma-fonctionnalite
   git rebase develop
   ```

4. **Pull Request**

   - Créer une Pull Request vers `develop`
   - Titre : même format que les commits (`feat: description`)
   - Description détaillée des changements
   - Demander une review à au moins un autre développeur
   - S'assurer que tous les tests passent
   - Vérifier que le code est bien formaté

5. **Review**

   - Examiner le code attentivement
   - Tester les changements localement
   - Faire des commentaires constructifs
   - Approuver ou demander des modifications

6. **Merge**
   - Merger uniquement après approbation
   - Utiliser "Squash and merge" pour garder l'historique propre
   - Supprimer la branche après le merge

### Migration vers develop

Si vous aviez déjà cloné le projet avant le changement de branche par défaut :

```bash
# Récupérer les derniers changements
git fetch origin

# Basculer sur develop
git checkout develop

# Lier votre branche develop locale à celle du dépôt distant
git branch --set-upstream-to=origin/develop develop

# Vérifier que tout est bien configuré
git branch -vv
```

Pour les nouveaux clones, aucune action n'est nécessaire : la branche `develop` sera automatiquement utilisée.

### Bonnes pratiques

- Ne jamais pusher directement sur `main` ou `develop`
- Garder les branches à jour avec `develop`
- Faire des branches courtes et focalisées
- Nommer les branches de manière descriptive
- Faire des commits atomiques et bien décrits
- Résoudre les conflits localement avant de pusher
- Toujours formatter et tester avant de commiter

### Release

1. **Préparer la release**

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/x.y.z
   ```

2. **Finaliser la release**

   - Mettre à jour la version dans package.json
   - Mettre à jour le CHANGELOG.md
   - Créer une Pull Request vers `main`

3. **Après le merge**
   ```bash
   git checkout main
   git pull origin main
   git tag -a vx.y.z -m "Version x.y.z"
   git push origin vx.y.z
   ```

### Templates GitHub (Recommandé)

1. **Créer un template de Pull Request**
   Dans `.github/PULL_REQUEST_TEMPLATE.md` :

   ```markdown
   ## Description

   [Description des changements]

   ## Type de changement

   - [ ] Feature
   - [ ] Bug fix
   - [ ] Documentation
   - [ ] Refactoring

   ## Tests

   - [ ] Tests ajoutés/mis à jour
   - [ ] Tests existants passent

   ## Checklist

   - [ ] Code formaté (yarn format)
   - [ ] Lint passé (yarn lint)
   - [ ] Documentation mise à jour
   ```

2. **Créer des templates d'Issues**
   Dans `.github/ISSUE_TEMPLATE/` :
   - `bug_report.md`
   - `feature_request.md`
   - `documentation.md`
