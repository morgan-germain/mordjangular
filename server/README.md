Préparation de l’application web, côté serveur
==============================================
Note : procédure inspirée de http://www.microdevblog.com/2013/06/django-14-on-google-app-engine-with.html


Télécharger le SDK de Google AppEngine ici : https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python

Dézipper cette archive dans un dossier accessible depuis le PATH pour pouvoir accéder facilement aux scripts appcfg.py et dev_appserver.py.

Création de l’application web, côté serveur
===========================================

Créer un dossier général pour l’application (à la racine du dépôt git) et se placer dedans
```bash
mkdir mordjangular ; cd mordjangular
```

Créer un dossier server et se placer dedans
```bash
mkdir server ; cd server
```

Créez la structure du projet django avec les outils de django
```bash
	django-admin.py startproject mordjangular
```

Créez un dossier pour les fichiers statiques comme suivant :
```bash
mkdir mordjangular/static
mkdir mordjangular/static/front # Répertoire où Grunt va publier
mkdir mordjangular/templates
```

Créez le fichier ```./app.yaml``` 	 comme suivant :
```yaml
application: morgan-germain
version: 1
runtime: python27
api_version: 1
threadsafe: true

libraries:
- name: django
  version: "1.4"

builtins:
- django_wsgi: on

env_variables:
  DJANGO_SETTINGS_MODULE: 'mordjangular.settings'

handlers:
- url: /static
  static_dir: static
  expiration: '0'
- url: /static/admin
  static_dir: static/admin
  expiration: '0'
```

Ajoutez l’en-tête suivant au fichier settings.py :
```python
# Set up relative references with "os"
import os
BASE_DIR = os.path.abspath(os.path.dirname(__file__)) + os.sep

# Make sure the project is on the PYTHONPATH
import sys
if BASE_DIR not in sys.path:
    sys.path.append(BASE_DIR)

# Detect AppEngine
if (os.getenv('SERVER_SOFTWARE', '').startswith('Google App Engine') or os.getenv('SETTINGS_MODE') == 'prod'):
    is_appengine = True
else:
    is_appengine = False


# Django settings for mordjangular project.
# ...
```

Ajoutez la gestion BDD suivante dans le fichier settings.py :
```python
if is_appengine:
    # Running on production App Engine, so use a Google Cloud SQL database.
    SOUTH_DATABASE_ADAPTERS = {'default':'south.db.mysql'} 
    DATABASES = {
        'default': {
            'ENGINE': 'google.appengine.ext.django.backends.rdbms',
            'INSTANCE': 'cloudsql-project-id:instance-name',
            'NAME': 'db-schema-name',
        }
    }
else:
    # Running in development, so use a local MySQL database
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'USER': 'local-db-username',
            'PASSWORD': 'local-db-password',
            'HOST': '',          # Set to empty string for localhost.
            'NAME': 'db-schema-name',
        }
    }
```

Définissez le chemin vers les fichier statiques dans settings.py:
```python
STATIC_ROOT = BASE_DIR + '..' + os.sep + 'static'

# URL prefix for static files.
# Example: "http://media.lawrence.com/static/"
STATIC_URL = '/static/'

# Additional locations of static files
STATICFILES_DIRS = (
     # Put strings here, like "/home/html/static" or "C:/www/django/static".     
     # Always use forward slashes, even on Windows.
     # Don't forget to use absolute paths, not relative paths.
     BASE_DIR + '_static',
)
```

Décommentez l’application de l’administration de la BDD :
```python
INSTALLED_APPS = (
    ...
    # Uncomment the next line to enable the admin:
    'django.contrib.admin',
    ...
)
```

Spécifiez le path vers le dossier Templates :
```python
TEMPLATE_DIRS = (
    # Put strings here, like "/home/html/django_templates"
    # Always use forward slashes, even on Windows.
    # Don't forget to use absolute paths, not relative paths.
    BASE_DIR + '..' + os.sep + 'templates',
)
```

Configurez ensuite l’envoie de mails en ajoutant ceci à la fin
```python
# Support for django-registration and django-registration-email
if is_appengine:
    EMAIL_BACKEND = 'djangoappengine.mail.AsyncEmailBackend'
else:
    EMAIL_BACKEND = 'djangoappengine.mail.EmailBackend'

ACCOUNT_ACTIVATION_DAYS = 7
SERVER_EMAIL = 'your-system-email-add@blah.com'
DEFAULT_FROM_EMAIL = 'default-from-email-addr@blah.com'
```

Créez le fichier ./wsgi.py comme suivant :
```python
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mygaeproject.settings")

# This application object is used by any WSGI server configured to use this
# file. This includes Django's development server, if the WSGI_APPLICATION
# setting points here.from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

Récupérer le mailer depuis le github de Django Appengine:
```bash
mkdir djangoappengine
wget https://github.com/django-nonrel/djangoappengine/blob/appengine-1.4/djangoappengine/mail.py -O djangoappengine/mail.py
```

Lancer le service web
```bash
~/bin/google_appengine/dev_appserver.py mordjangular/
```
Enjoy http://localhost:8080/
Enjoy http://localhost:8000/

Publier le site sur App Engine
```bash
~/bin/google_appengine/appcfg.py update mordjangular/
```

Enjoy http://morgan-germain.appspot.com/
