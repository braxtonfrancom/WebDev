// Erik's API key. Get your own :P
const apiKey = 'o8A-AZSvTssXC8RkJooE';


// Global variables allow us to examine the results of asynchronous requests
var theData;
var promise0;
var promise1;
var promise2;


// Map data set names in a <select> to URLs
var urls = {
    "sentiment": "https://data.nasdaq.com/api/v3/datasets/UMICH/SOC1.json",
    "s-and-p": "https://data.nasdaq.com/api/v3/datasets/YALE/SPCOMP.json",
    "poptot": 'https://data.nasdaq.com/api/v3/datasets/UGID/POPTOT_.json',
    "slcpop": 'https://data.nasdaq.com/api/v3/datasets/CITYPOP/CITY_SALTLAKECITYUTUSA.json',
    "nycpop": 'https://data.nasdaq.com/api/v3/datasets/CITYPOP/CITY_NEWYORKNYUSA.json',
};


// Callback for <select> input's onchange event
// When the user selects a URL from the dropdown, update the DOM to reflect their choice
var update_url = function(select) {
    let url = `${urls[select.value]}?api_key=${apiKey}`;
    console.log(`The selected URL is ${url}`);
    // Use the URL as the text content of any DOM element with class="url"
    for (let e of document.querySelectorAll('.url')) {
        e.textContent = url;
    }
}


// Callback for "Fetch!" button's onclick event
var go_fetch = function() {
    let url = document.querySelector('.url').textContent;

    if (url) {
        document.querySelector('#nasdaq').textContent = "Query is on the wire...";
        console.log(url);

        // This is not the ideomatic way to use fetch() and its resulting promises!

        // make a GET request against the chosen the URL
        promise0 = fetch(url);

        // convert the HTTP response into JSON
        promise1 = promise0.then(responseToJson);

        // copy the JSON response to global variable 'theData', then update the DOM 
        promise2 = promise1.then(presentData);

        // Finally, wrap everything up with a nice bow
        promise2.finally(allDone);
    }
}


// Used as a callback to a Promise's `.then()` method
// Converts an HTTP response payload into JSON
// Returns a Promise that contains JSON
var responseToJson = function(response) {
    return response.json()
}


// Used as a callback to a Promise's `.then()` method
// Copy the JSON object to global var `theData` and update the DOM
var presentData = function(json) {
    theData = json;
    console.log("Your data is available in the JavaScript console in the variable 'theData'");
    document.querySelector('#nasdaq').innerHTML = "Your data is available in the JavaScript console in the variable <code>theData</code>";
    document.title = theData.dataset.name;
}


// Used as a callback to a Promise's `.then()` method
// Wrap everything up with a nice bow
var allDone = function() {
    console.log("All done!");
    document.querySelector('#nasdaq').innerHTML += "  All done!";
}
