# Django + Vue Random Character Sheet

Generate a random character for your favorite RPG

## Installation

0. Copy this app directory into a Django project
1. Install it into Django project's settings.py:
    INSTALLED_APPS += ['charactersheet.apps.CharactersheetConfig']
2. Add a pathconfig to Django project's urls.py:
    urlpatterns += [path('chars/', include('charactersheet.urls'))]


## Usage

### Pretty interface

Navigate to http://localhost:8000/chars for the user-friendly GUI.


### JSON API endpoint

Hit http://localhost:8000/chars/stats with cURL or similar:

    $ curl -s http://localhost:8000/chars/stats | python -m json.tool
    {
        "first": "Brittany",
        "last": "Snuggydolt",
        "stats": {
            "str": 5,
            "dex": 8,
            "chr": 1,
            "int": 11,
            "wis": 8,
            "con": 12
        },
        "attribs": [
            [
                "race",
                "Human"
            ],
            [
                "age",
                46
            ],
            [
                "height",
                "3'11\""
            ],
            [
                "hair",
                "Platinum"
            ],
            [
                "eyes",
                "Gray"
            ]
        ]
    }
