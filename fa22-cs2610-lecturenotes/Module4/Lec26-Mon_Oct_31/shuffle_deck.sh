#!/usr/bin/bash

if [[ $# -eq 0 ]]; then
    DECK=418bqwvj7m6p
else
    DECK=$1
fi

curl "https://deckofcardsapi.com/api/deck/$DECK/shuffle/" | python -m json.tool
