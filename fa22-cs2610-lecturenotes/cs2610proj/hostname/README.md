# Django Host Header demonstration

0. One view shows the user the HTTP headers seen by the server.
1. Another  view shows the user a different webpage depending upon whether they
   visit 'cats.com' or 'dogs.org'.


## Installation

0. Copy this app directory into a Django project
1. Edit the Django project's settings.py and add these hostnames to `ALLOWED_HOSTS`:
    ALLOWED_HOSTS += ['cats.com', 'dogs.org']
2. Install the app:
    INSTALLED_APPS += ['hostname.apps.HostnameConfig']
3. Add a pathconfig to Django project's urls.py:
    urlpatterns += [path('hostname/', include('hostname.urls'))]
4. Edit your system's hosts file (usually `/etc/hosts`) and add to it this line:
    127.0.0.1       cats.com dogs.org
5. You may need to restart your browser for this change to be effective


## Usage

0. http://localhost:8000/hostname/ is the index page
1. http://localhost:8000/hostname/headers displays your HTTP headers
2. http://localhost:8000/hostname/headers_json gives the HTTP headers as JSON 
3. Navigate to http://localhost:8000/hostname/hostname for an ordinary page
4. Navigate to http://dogs.org:8000/hostname/hostname for the dog lover's page
5. Navigate to http://cats.com:8000/hostname/hostname for the can fancier's page
