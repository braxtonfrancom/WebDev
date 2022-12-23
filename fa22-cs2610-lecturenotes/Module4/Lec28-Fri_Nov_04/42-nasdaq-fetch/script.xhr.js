// Erik's API key. Get your own :P
const apiKey = 'o8A-AZSvTssXC8RkJooE';


// Global variables allow us to examine the results of asynchronous requests
var theData;


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

        let XHR = new XMLHttpRequest();
        XHR.onreadystatechange = function() {
            if (XHR.readyState == 2) {
                document.querySelector('#nasdaq').textContent = "Query is on the wire...";
            }
            else if (XHR.readyState == 4) {
                if (XHR.status == 200) {
                    console.log(XHR.responseText);
                    try {
                        theData = JSON.parse(XHR.responseText);
                        console.log("Your data is available in the JavaScript console in the variable 'theData'");
                        document.querySelector('#nasdaq').innerHTML = "Your data is available in the JavaScript console in the variable <code>theData</code>";
                        document.title = theData.dataset.name;
                    }
                    catch (e) {
                        //
                        // H A D O U K E N !!!!!!
                        //
                        console.log("Failed to parse result of XHR into JSON");
                        document.querySelector('#nasdaq').innerHTML = "Failed to parse result of XHR into JSON";
                    }
                }
                else {
                    let message = `Request to ${url} didn't work`;
                    console.log(message);
                    document.querySelector('#nasdaq').innerHTML = message;
                }

                console.log("All done!");
                document.querySelector('#nasdaq').innerHTML += "  All done!";
            }
            else {
                console.log(`XHR.readyState = ${XHR.readyState}`);
            }
        };
        XHR.open('get', url);
        XHR.send();
    }
}
