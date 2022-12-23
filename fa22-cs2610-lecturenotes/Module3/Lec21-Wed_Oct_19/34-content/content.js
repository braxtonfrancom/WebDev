// Set the document's title
document.title = "Is it magic? Or is it JavaScript?";


// Fill in the red div
var p0 = document.createElement('p');
p0.textContent = "First, take a look at this page's HTML document";
var p1 = document.createElement('p');
p1.textContent = "(It's the file called index.html)";
var p2 = document.createElement('p');
p2.textContent = "Where are all of these words comming from?";

var red = document.createElement('div');
red.setAttribute('class', 'red stuff-box'); // <div class="red stuff-box">
red.appendChild(p0);
red.appendChild(p1);
red.appendChild(p2);
document.body.appendChild(red);


// Fill in the yellow div
p0 = document.createElement('p');
p0.textContent = "Then take a look at the stylesheet for this page";
p1 = document.createElement('p');
p1.textContent = "(It is a file called 'style.css')";
p2 = document.createElement('p');
p2.textContent = "Did you find what you are looking for?";

var yellow = document.createElement('div');
yellow.setAttribute('class', 'yellow stuff-box');
yellow.appendChild(p0);
yellow.appendChild(p1);
yellow.appendChild(p2);
document.body.appendChild(yellow);


// Add content to the blue div
p0 = document.createElement('p');
p0.textContent = "Then have a look at that JavaScript file mentioned at the end";
p1 = document.createElement('p');
p1.textContent = "(This file is called 'content.js')";

var blue = document.createElement('div');
blue.setAttribute('class', 'blue stuff-box');
blue.appendChild(p0);
blue.appendChild(p1);
document.body.appendChild(blue);


// Add content to the green div
p0 = document.createElement('p');
p0.textContent = "Does that finally solve the mystery?";

var green = document.createElement('div');
green.setAttribute('class', 'green stuff-box');
green.appendChild(p0);
document.body.appendChild(green);
