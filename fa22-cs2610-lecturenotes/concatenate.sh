#!/bin/sh

if [[ -f all_notes.md ]]; then
    echo "Removing old all_notes.md..."
    rm -f all_notes.md
fi

# Adjust hyperlinks to local files
for README in $( find . -path './Module?/Lec??-???_???_??/README.md' | sort ); do
    echo Processing $README
    LECTURE=$(basename $(dirname $README))
    MODULE=$(basename $(dirname $(dirname $README)))
    sed                                          \
        -e "s:](\.\./\.\./:](:; t end"           \
        -e "s:](\.\./:]($MODULE/:; t end"        \
        -e "s:](\./:]($MODULE/$LECTURE/:; t end" \
        -e :end \
        $README >> all_notes.md
done

if [[ -s all_notes.md ]]; then
    chmod -w all_notes.md
    echo "Created all_notes.md"
elif [[ -f all_notes.md ]]; then
    echo "all_notes.md has no content.  Deleting empty file..."
    rm -f all_notes.md
else
    echo "Unable to create all_notes.md"
    echo "Contact erik.falor@usu.edu for help"
    exit 1
fi
