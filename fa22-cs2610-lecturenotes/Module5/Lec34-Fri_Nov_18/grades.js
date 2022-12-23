function grades(scores) {
    document.title = `There are ${scores.length} submissions to grade`;
    
    // get rid of the extra paragraph elements
    document.querySelector('p').remove();
    document.querySelector('p').remove();
    
    let max = 0;
    for (let i in scores) {
        if (scores[i] > max) {
            max = scores[i];
        }
    }

    let div = document.createElement('div');
    div.setAttribute("class", "white stuff-box");

    let h1 = document.createElement('h1');
    h1.textContent = "JavaScript Grading Program";
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    h2.textContent = `There are ${scores.length} submissions to grade`
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    h3.textContent = `The greatest score is ${max}`;
    div.appendChild(h3);

    document.body.appendChild(div);
    
    let decile = max / 10;
    
    let grades = {A: [], B: [], C: [], D: [], F: []};
    for (let i in scores) {
        if (scores[i] >= max - decile) {
            grades.A.push([`Student #${i}`, scores[i]]);
        }
        else if (scores[i] >= max - decile * 2) {
            grades.B.push([`Student #${i}`, scores[i]]);
        }
        else if (scores[i] >= max - decile * 3) {
            grades.C.push([`Student #${i}`, scores[i]]);
 
        }
        else if (scores[i] >= max - decile * 4) {
            grades.D.push([`Student #${i}`, scores[i]]);
        }
        else {
            grades.F.push([`Student #${i}`, scores[i]]);
        }       
    }

    let colors = {A: "blue", B: "green", C: "yellow", D: "red", F: "black"};
    for (let letter in grades) {
        let div = document.createElement('div');
        div.setAttribute("class", `${colors[letter]} stuff-box`);

        if (grades[letter].length == 1) {
            div.textContent = `There was ${grades[letter].length} student with a grade of ${letter}`;
        }
        else {
            div.textContent = `There were ${grades[letter].length} students with a grade of ${letter}`;
        }

        let ol = document.createElement('ol');
        for (let student of grades[letter]) {
            let li = document.createElement('li');
            li.textContent = `${student[0]} got a score of ${student[1]}`;
            ol.appendChild(li);
        }
        div.appendChild(ol);
        document.body.appendChild(div);
    }
}
 
const scores = [75, 74, 80, 75, 47, 37, 73, 34, 70, 60, 53, 77, 72, 67];
 
var g = grades(scores);
