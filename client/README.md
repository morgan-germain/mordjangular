Préparation de l’application web, côté client
=============================================

Installation de NVM (NodeJS Version Manager)
--------------------------------------------

NVM permet de déployer différentes version de nodejs. Il permet surtout d’utiliser la dernière version sans l’installer en admin dans notre cas

Page du projet: https://github.com/creationix/nvm
```bash
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

Editer le script `~/.nvm/nvm.sh` pour remplacer le shebang par `#!/bin/bash` au lieu de `#!/bin/sh`

Le fichier `~/.profile` doit contenir la ligne suivante:
```bash
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh # This loads NVM
```

Il faut bouger cette ligne pour la mettre dans `~/.bashrc` car `.profile` étant sourcé, `nvm.sh` sera parsé tantôt par Bash, tantôt par Dash et la connexion du serveur X sour Ubuntu 13.04 et 13.10 serait cassée dans une telle situation.

Rouvrir ensuite un terminal
```bash
nvm ls-remote
nvm install 0.10.24  # last version is 0.11.10 at 3rd jan 2014, but
                     # bower only supports v0.10.x
nvm alias default 0.10.24
```

Installer lessc
---------------
```bash
npm install -g less
```

Installation de Yeoman et de ses outils
---------------------------------------
```bash
npm install -g yo                 # Install bnower grunt-cli 
npm install -g generator-angular  # Install AngularJS generator
```

Création de l’application web, côté client
==========================================
```bash
mkdir myProject; cd myProject
yo angular  # Créer le projet (inclure Bootstrap, mais pas Sass)
```
Installer Angular-bootstrap (anciennement Angular-UI) (facultatif)
------------------------------------------------------------------
```bash
bower install --save angular-bootstrap # install a dependency
```
Le fichier `bower.json` est ainsi remis à jour grâce à `--save`

Préparer les tests unitaires
----------------------------
Remplacer Chrome par PhantomJS dans le fichier `karma.conf.js` à la ligne 49:
```javascript
browsers = ['PhantomJS'];
```
Générer, tester et lancer l'application
---------------------------------
```bash
grunt test                 # test your app
grunt server               # view your app at http://127.0.0.1:9000/#/
grunt                      # build the application for deployment
```

Rendre le serveur local publique
--------------------------------
Pour l’instant, le serveur lancé par Grunt va écouter sur localhost, mais on peut lui dire d’écouter sur une plage d’adresse :

```bash
# Replace localhost by 0.0.0.0 in Gruntfile.js::65
  hostname: '0.0.0.0',
```

Installation de jQuery 2.0.3
----------------------------
```bash
bower install --save jquery#~2.0.3
# le fichier bower.json est remis à jour grâce à --save
```

Update du package es5-shim
--------------------------
```bash
bower list
# On doit voir une nouvelle version de es5-shim
bower install --save es5-shim#~2.3.0
# le fichier bower.json est remis à jour grâce à --save
```

Configurer le path pour la publication
--------------------------------------
On souhaite publier les fichiers du front end vers le dossier static de Django. Pour cela, on va changer la destination dans le fichier `Grunfile.js` : Remplacez la référence `yeoman.dist` par ceci :

```javascript
yeoman: {
  // ...
  dist: '../server/mordjangular/static/front'
},
```

Publier l’application frontend
------------------------------
```bash
grunt
```

Pour visualiser l'application cliente (sans serveur), rendez-vous sur l'adresse [http://localhost:9000](http://localhost:9000)


TODO
====
 * [TODO] installer LESS
 * [TODO] fixer l'intégration avec un projet Django (changer l'URL /static en /app)
 * [TODO] travailler avec une version dev et publier avec une version minifiée


A faire régulièrement en cours de projet
----------------------------------------
Mettre à jour les outils de gestion des packages

```bash
npm update -g bower yo grunt
```

Tenir à jour les dépendances du projet dans le fichier bower.json
```
bower list      # list available updates
bower update
```
