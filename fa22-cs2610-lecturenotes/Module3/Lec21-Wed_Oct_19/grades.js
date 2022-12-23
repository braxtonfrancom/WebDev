function grades(scores) {
    let div = document.createElement('div');
    let h1 =  document.createElement('h1');
    div.appendChild(h1);

    // we now have this structure:
    // <div>
    //     <h1>...</h1>
    // </div>
    h1.textContent = "JavaScript Grading Program";
    let h2 = document.createElement('h2');
    h2.textContent = "There are " + scores.length + " submissions to grade";
    div.appendChild(h2);
    // we now have this structure:
    // <div>
    //     <h1>JavaScript Grading Program</h1>
    //     <h2>There are N submissions to grade</h2>
    // </div>

    document.body.appendChild(div);
    div.setAttribute('class', "white stuff-box");


    // The maximum score
    let max = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
        }
    }
    let p = document.createElement('p');
    p.textContent = "The greatest score is " + max;
    div.appendChild(p);

    let decile = max / 10;
    p = document.createElement('p');
    p.textContent = `The decile boundary is every ${decile} points`;
    div.appendChild(p);


    let letterGrades = {
        A: [], B: [], C: [], D: [], F: [],
    };

    for (let s in scores) {
        if (scores[s] >= max - 1 * decile) {
            letterGrades.A.push([`Student #${s}`, scores[s]]);
        }
        else if (scores[s] >= max - 2 * decile) {
            letterGrades.B.push([`Student #${s}`, scores[s]]);
        }
        else if (scores[s] >= max - 3 * decile) {
            letterGrades.C.push([`Student #${s}`, scores[s]]);
        }
        else if (scores[s] >= max - 4 * decile) {
            letterGrades.D.push([`Student #${s}`, scores[s]]);
        }
        else {
            letterGrades.F.push([`Student #${s}`, scores[s]]);
        }
    }

    for (let grade in letterGrades) {
        console.log(`${letterGrades[grade].length} students got a ${grade}`);
        for (let student of letterGrades[grade]) {
            console.log(`  ${student[0]} got ${student[1]} points`);
        }
    }

}

// remove all of the pre-defined paragraphs
for (let p of document.querySelectorAll('p')) {
    p.remove();
}

// document.querySelector('script').remove();
document.title = "JavaScript Grading Program";

const scores = [75, 74, 80, 75, 47, 37, 73, 34, 70, 60, 53, 77, 72, 67];

grades(scores);

/* Hints:
 * To loop over an array by index, use `for (var i in array)`
 * To loop over an array by value, use `for (var v of array)`
 * Append items to an array with the `.push()` method
 * For our purposes, objects are constructed identically to Python dictionaries:
 *  var obj = {one: 1, two: 'dos', three: []};
 */
