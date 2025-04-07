# API REST Node.js pour Pidu

Ce dossier contient le serveur Express qui gère l'API REST de l'application Pidu.

## Variables d'environnement requises

Pour que le serveur fonctionne correctement, vous devez configurer les variables d'environnement suivantes :

- `DATABASE_URL` : URL de connexion à la base de données Neon
- `PORT` : Port sur lequel le serveur doit s'exécuter (par défaut: 3000)

## Configuration sur Vercel

Pour déployer cette API sur Vercel, vous devez configurer ces variables d'environnement dans les paramètres de votre projet Vercel :

1. Allez sur le tableau de bord Vercel
2. Sélectionnez votre projet
3. Allez dans "Settings" > "Environment Variables"
4. Ajoutez les variables d'environnement mentionnées ci-dessus

## Développement local

Pour exécuter le serveur localement :

```bash
cd node-rest-api
yarn install
node server.js
```

Ou depuis la racine du projet :

```bash
yarn back
```
