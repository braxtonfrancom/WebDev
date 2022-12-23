#!/usr/bin/bash

if [[ $# -eq 0 ]]; then
    DECK=418bqwvj7m6p
else
    DECK=$1
fi

curl "https://deckofcardsapi.com/api/deck/$DECK/draw/?count=20" | python -m json.tool
