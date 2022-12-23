let protocol = 'http';
let hostname = 'localhost:8000';

var calculate = function() {
    let n = document.querySelector('#fib').value;
    if (n == "") {
        document.querySelector('#result').textContent = "The number cannot be blank!";
        return;
    }
    // else if (Number.isNaN(Number(n))) {
    //     document.querySelector('#result').textContent = "The number should be a number, you know?  Not NaN, which is not a number";
    //     return;
    // }
    else {
        document.querySelector('#result').textContent = "Thinking about it...";
        document.querySelector('#duration').textContent = ``;
        before = new Date();
        let URL = `http://localhost:8000/fib/fibAPI?N=${n}`;
        // let URL = `http://${window.location.host}/fib/fibAPI?N=${n}`;
        fetch(URL)
            .then(r => r.json())
            .then(json => {
                if (json.hasOwnProperty('error')) {
                    throw json.error;
                    //document.querySelector('#result').textContent = `Error: ${json.error}`;
                }
                else {
                    document.querySelector('#result').textContent = `fib(${json.N}) = ${json.fibonacci}`;
                }
            })
            .catch(err => {
                document.querySelector('#result').textContent = `Error: ${err}`;
            })
            .finally(() => {
                after = new Date();
                document.querySelector('#duration').textContent = `Why, that took only ${after - before} milliseconds!`;
            });
    }
}


var fiblist = function(n) {
    // Remove an existing Fibonacci list
    let fiblist = document.querySelector('div.fib-list');
    if (fiblist) {
        fiblist.remove();
    }
    document.querySelector('#list-label').textContent = `Fib(${n.value})`;
    let list = fiblistHelper(Number.parseInt(n.value));
    document.querySelector('#fibonacci-slider').appendChild(list);
}

var fiblistHelper = function(n)  {
    // create a div that is .fib-list
    var div = document.createElement('div');
    div.setAttribute('class', 'fib-list');

    // fill it with a list of numbers
    for (var i = 0, a = 0, b = 1; i <= n; ++i, b = a + b, a = b - a) {
        var num = document.createElement('div');
        num.setAttribute('class', 'fib-item');
        var p = document.createElement('p');
        p.textContent = a;
        num.appendChild(p);
        div.appendChild(num);
    }

    return div;
}
