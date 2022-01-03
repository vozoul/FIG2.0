# Définition du projet

## Découpage de la plateforme

|**Application**|**Description**||
|:--|:--|:-:|
|[frontClient]() |Affichage des informations public| [Todo list](todo/frontend.md)|
|[api]() |Traitement de la logique et des appels à la db| [Todo list](todo/api.md)|
|[backClient]() |Affichage des informations + gestion des plateformes| [Todo list](todo/back.md)|
|[db]() |Sauvegarde des données| [Todo list](todo/db.md)|



## pré-requis

Pour initer ce projet vou avez besoin de différent outils:

- [git](https://git-scm.com/downloads)
- [node](https://nodejs.org/en/download/)
- un IDE (vous êtes libre de choix)

_Liens cliquables, vous renvoient sur les pages dédiés_


## Installation du projet et mise en service

Tous d'abord récupérer le projet, dans un dossier de travail depuis l'invite de commande

```bash
git clone https://github.com/vozoul/lesfigs.git
```

une fois fait, `git` aura créer un dossiers `lesfigs` pour vous

```bash
cd lesfigs
```
une fois fait ouvrez le dans votre editeur de code (dans l'exemple j'utilise [visual studio code](https://code.visualstudio.com/download))

```bash
code .
```

Vous avez dorénavent accès au fichiers du projets

pour mettre en service et pouvoir faire fonctionner chaque serveurs quelques étapes sont encore à executer

- installer les packets
- créer vos variables d'environnement

#### installation des différents packets

depuis l'invite de commande dans le dossier source (lesfigs)

```bash
cd <nom_dossier>        # entre dans le dossier spécifié (remplacez <nom_dossier> par le dossier choisi ['api', 'frontend', 'backend', 'db'])
npm i                   # install les différentes dépendences listées dans le fichier package.json
cd ..                   # reviens au dossier parent (lesfigs depuis un sous dossier)
```
c'est presque près

#### les fichiers d'environnement

en premier lieu commencez par changer de branch pour libéré la branch master et ne pas injecter d'erreurs
ensuite créer une branch de la feature que vous dévellopez

```bash
git checkout -b dev
git checkout -b <nom_feature>
```

ensuite definissez vos variable d'environnement (_Attention certain sont en relation_)

- dupliquez les fichiers `.env.template` et nommez les en `.env`
- éditez les
- remplissez avec les valeurs inhérentes à votre système