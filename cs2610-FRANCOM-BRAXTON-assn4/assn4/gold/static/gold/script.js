dropDivDict = {"T": "ton", "g": "gram", "t_oz": "troy ounce", "kg": "kilogram", "lb": "pound", "oz": "ounce"};

var goldPriceValue = 0;

document.title = "Gold";
let mainDiv = document.createElement('div');
mainDiv.setAttribute('class', "yellow shadowed stuff-box");

let h1 = document.createElement('h2');
h1.textContent = "Weight in Gold";

let h2 = document.createElement('h3');
h2.textContent = "Input your weight and then press the button to see your worth lol";

let secondh2 = document.createElement('h4');
secondh2.textContent = "For your privacy, results are removed when clicked"

//Input field #1
let input1 = document.createElement('input');
input1.setAttribute('type', "number");
input1.setAttribute('name', "number");
input1.setAttribute('id', "number");
input1.setAttribute('placeholder', "3");

//Dropdown items div
let dropDiv = document.createElement('select');
dropDiv.setAttribute('name', "drop");
dropDiv.setAttribute('id', 'drop');

//Dropdown items list
let t = document.createElement('option');
t.setAttribute('value', "T");
t.setAttribute('name', "U.S Ton")
let g = document.createElement('option');
g.setAttribute('value', "g");
let t_oz = document.createElement('option');
t_oz.setAttribute('value', "t_oz");
let kg = document.createElement('option');
kg.setAttribute('value', "kg");
let lb = document.createElement('option');
lb.setAttribute('value', "lb");
let oz = document.createElement('option');
oz.setAttribute('value', "oz");

t.textContent = "U.S Ton";
g.textContent = "Gram";
t_oz.textContent = "Troy Ounce";
kg.textContent = "Kilogram";
lb.textContent = "Imperial Pound";
oz.textContent = "Ounce";

dropDiv.appendChild(t);
dropDiv.appendChild(g);
dropDiv.appendChild(t_oz);
dropDiv.appendChild(kg);
dropDiv.appendChild(lb);
dropDiv.appendChild(oz);

//resultsDiv
let resultsDiv = document.createElement('div');
resultsDiv.setAttribute('id', "resultsDiv");
resultsDiv.setAttribute('name', "resultsDiv");
resultsDiv.setAttribute('class', "shadowed stuff-box");

//Compute button
let button = document.createElement('button');
button.textContent = "=";

//Function call to convert()
button.addEventListener('click', convert);

let br = document.createElement('br');



// let printButton = document.createElement('button');
// printButton.textContent = "bruh";

// printButton.addEventListener('click', window.print());




//Gold Price
let goldPrice = document.createElement('p');
goldPrice.textContent = "Please Wait..."
goldPrice.setAttribute('name', "goldPrice");
goldPrice.setAttribute('id', "goldPrice");

let URL = 'https://data.nasdaq.com/api/v3/datasets/LBMA/GOLD?limit=1&api_key=NHszDaMzgoxFFXbAWfJ3';  //PROBABLY NEED TO ADD MORE HERE

    fetch(URL)
        .then(response => response.json()) //converts request from fetch to json
        .then(r => {
            goldPriceValue = JSON.stringify(r.dataset.data[0][1]);
            document.querySelector('#goldPrice').textContent = "The price of gold as of " + r.dataset.data[0][0] + " is $" + goldPriceValue + " per troy oz";
        })
        .catch(err => {
            document.querySelector('#goldPrice').textContent = `Error: ${err}`;
        })


mainDiv.appendChild(h1);
mainDiv.appendChild(h2);
mainDiv.appendChild(secondh2);
mainDiv.appendChild(input1);
mainDiv.appendChild(dropDiv);
mainDiv.appendChild(button);
//mainDiv.appendChild(printButton);
mainDiv.appendChild(br);
mainDiv.appendChild(goldPrice);

document.body.appendChild(mainDiv);
document.body.appendChild(resultsDiv);




async function convert() {
    let n = document.querySelector('#number').value;
    let dropValue = document.querySelector('#drop').value;

    let date = new Date();
    let newTing = document.createElement('div');
    newTing.setAttribute('class', "shadowed stuff-box");
    newTing.style.backgroundColor="blue";
    newTing.addEventListener('click', function handleClick() {
        newTing.remove()
    });

    if (n == "") {
        newTing.style.backgroundColor="red";
        newTing.textContent = date + " You didn't enter anything man!";
        resultsDiv.insertBefore(newTing, resultsDiv.firstElementChild)
        return;
    }
    else if (Number.isNaN(Number(n))) {
        newTing.style.backgroundColor="red";
        newTing.textContent = date + " The number should be a number bruh.  Not NaN, which is not a number";
        resultsDiv.insertBefore(newTing, resultsDiv.firstElementChild)
        return;
    }
    else {
        var totalPrice;
        let URL = `http://localhost:8000/unitconv/convert?from=${dropValue}&to=t_oz&value=${n}`;

        //I put async and await in here...do I need those??
        await fetch(URL)
            .then(r => r.json())
            .then(jsonResponse => {
                let weightInTroys = jsonResponse.value;
                let goldNum = parseFloat(goldPriceValue)

                totalPrice = Math.round((weightInTroys * goldNum) * 100) / 100;
                return weightInTroys;

            })

            //Finds the full name in dropDivDictionary so I can print it out
            for (key in dropDivDict) {
                if (key == dropDiv.value) {
                    var fullName = dropDivDict[key]; 
                }
            }
        
            newTing.textContent = "At " + date + ", " + n + " " + fullName + "s of gold is worth $" + totalPrice.toLocaleString();
            resultsDiv.insertBefore(newTing, resultsDiv.firstElementChild);     
    }
}