#!/bin/sh

convert $1 -gravity 'northwest' -background 'rgba(255,255,255,0)' -splice '15x15' \( +clone -background '#005f005f005f0000' -shadow "80x3-1-1" \) +swap -background none -mosaic +repage \( +clone -background '#005f005f005f0000' -shadow "80x3+5+5" \) +swap -background none -mosaic +repage shadowed.png
command mv shadowed.png $1

