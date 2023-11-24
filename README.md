# Projet-DevOps2

# GitFlow pour Projet Devops

Ce projet suit le modèle de GitFlow pour assurer une gestion structurée et efficace du développement et des déploiements.

## Branches

- `main` : C'est la branche de production. Elle contient le code qui est actuellement en production.
- `develop` : C'est la branche de développement. Toutes les fonctionnalités sont d'abord fusionnées ici.
- `feature/*` : Ces branches sont utilisées pour développer de nouvelles fonctionnalités. Chaque fonctionnalité a sa propre branche et est nommée `feature/nom_de_la_fonctionnalité`.
- `release/*` : Lorsqu'on se prépare pour une release, on crée une branche `release` à partir de `develop`. Les derniers tests et corrections se font ici avant de fusionner dans `main` et `develop`.
- `hotfix/*` : Les correctifs urgents sont gérés dans ces branches. Ils sont basés sur `main` et fusionnés à la fois dans `main` et `develop`.

## Processus de Développement

1. Début d'une fonctionnalité : `git checkout -b feature/nom_de_la_fonctionnalité develop`
2. Une fois la fonctionnalité terminée, créez une pull request vers `develop`.
3. Après la revue par les pairs, fusionnez la fonctionnalité dans `develop`.
4. Lorsque `develop` est prêt pour une release, créez une branche `release/nom_de_la_version`.
5. Corrigez les bugs dans la branche `release`, puis fusionnez-la dans `main` et `develop`.
6. Les hotfixes sont créés à partir de `main` et, après validation, fusionnés dans `main` et `develop`.

## Règles de Protection de Branches

Les branches `main` et `develop` sont protégées. Les pull requests sont nécessaires pour fusionner les changements, et les tests CI doivent passer avant que la fusion soit possible.

## Contribution

Veuillez suivre ce GitFlow pour toutes vos contributions au projet. Assurez-vous que vos commits sont clairs et que vos pull requests sont détaillées avec des informations suffisantes pour les examinateurs.

