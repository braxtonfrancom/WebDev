function calculator() {
    document.title = "JavaScript Grading Program";
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', "blue shadowed stuff-box");

    let h1 = document.createElement('h1');
    h1.textContent = "Javascript Calculator";

    let h2 = document.createElement('h2');
    h2.textContent = "Enter an expression: ";

    //Input field #1
    let input1 = document.createElement('input');
    input1.setAttribute('type', "number");
    input1.setAttribute('placeholder', "3");

    //Dropdown items div
    let dropDiv = document.createElement('select');

    //Dropdown items list
    let add = document.createElement('option');
    let subtract = document.createElement('option');
    let multiply = document.createElement('option');
    let divide = document.createElement('option');
    let mod = document.createElement('option');
    let exponent = document.createElement('option');

    add.textContent = "+";
    subtract.textContent = "-";
    multiply.textContent = "*";
    divide.textContent = "/";
    mod.textContent = "%";
    exponent.textContent = "**";

    dropDiv.appendChild(add);
    dropDiv.appendChild(subtract);
    dropDiv.appendChild(multiply);
    dropDiv.appendChild(divide);
    dropDiv.appendChild(mod);
    dropDiv.appendChild(exponent);

    //#Input field #2
    let input2 = document.createElement('input');
    input2.setAttribute('type', "number");
    input2.setAttribute('placeholder', "26");

    //resultsDiv
    let resultsDiv = document.createElement('div');
    resultsDiv.setAttribute('id', "resultsDiv");
    resultsDiv.setAttribute('class', "shadowed stuff-box");

    //Compute button
    let button = document.createElement('button');
    button.textContent = "Compute";

    //Function call to append()
    button.addEventListener('click', append);
    //button.onclick = append();

    let br = document.createElement('br');

    //Color chooser
    let color = document.createElement('input');
    color.setAttribute('type', "color");
    color.setAttribute('class', "shadowed stuff-box");

    let colorLabel = document.createElement('label');
    colorLabel.textContent = "Color of new result <div>";

    mainDiv.appendChild(h1);
    mainDiv.appendChild(h2);
    mainDiv.appendChild(input1);
    mainDiv.appendChild(dropDiv);
    mainDiv.appendChild(input2);
    mainDiv.appendChild(button);
    mainDiv.appendChild(br);
    mainDiv.appendChild(color);
    mainDiv.appendChild(colorLabel);

    document.body.appendChild(mainDiv);
    document.body.appendChild(resultsDiv);


//APPEND FUNCTION
function append() {
        let date = new Date();
        let newTing = document.createElement('div');
        newTing.setAttribute('class', "shadowed stuff-box");

        if (input1.value && input2.value) {
            newTing.style.backgroundColor=color.value;
            newTing.textContent = date + " " + input1.value + " " + (dropDiv.value) + " " + input2.value + " = " + eval("(" + (input1.value) + ")" + (dropDiv.value) + "(" + (input2.value) + ")");
            resultsDiv.insertBefore(newTing, resultsDiv.firstElementChild);
        }
        else {
            newTing.style.backgroundColor="red";
            newTing.textContent = date +  " Error! Missing One or More Operands!";
            resultsDiv.insertBefore(newTing, resultsDiv.firstElementChild);
        }
        newTing.addEventListener('click', function handleClick() {
                newTing.remove();
            });
    };




}

calculator();