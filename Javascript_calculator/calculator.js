function calculator() {
    let computedResults = [];

    do {
        let xInput = prompt("Enter the first number (x):");
        let yInput = prompt("Enter the second number (y):");

        let x = parseFloat(xInput);
        let y = parseFloat(yInput);

        let operator = prompt("Enter the operator (+, -, *, /, %):");

        let result;

        if (isNaN(xInput) || isNaN(yInput)) {
            result = "wrong input number"
        } else {
            switch (operator) {
                case '+':
                    result = x + y;
                    break;
                case '-':
                    result = x - y;
                    break;
                case '*':
                    result = x * y;
                    break;
                case '/':
                    result = x / y;
                    break;
    
                case '%':
                    result = x % y;
                    break;
                default:
                    result = "computation error";
                    break;
            }
        }

        computedResults.push({x: xInput, y: yInput, operator: operator, result: result});

        let continueLoop = confirm("Do you want to make another calculation?");

        if (!continueLoop) {
            break;
        }

    } while (true);
    
    //Generating results table
    let tableHtml = "<table>";
    tableHtml += "<tr><th>X</th><th>Operator</th><th>Y</th><th>Result</th></tr>"

    for (let result of computedResults) {
        tableHtml += "<tr><td>" + result.x + "</td><td>" + result.operator + "</td><td>" + result.y + "</td><td>" + result.result + "</td></tr>";
    }

    tableHtml += "</table>";

    document.write("<style>");
    document.write("table {");
    document.write("  width: 100%;");
    document.write("  border-collapse: collapse;");
    document.write("}");
    document.write("th, td {");
    document.write("  border: 1px solid #ddd;");
    document.write("  padding: 8px;");
    document.write("  text-align: left;");
    document.write("}");
    document.write("tr:nth-child(even) {");
    document.write("  background-color: #f2f2f2;");
    document.write("}");
    document.write("</style>");
    document.write(tableHtml);

    //Generating statistics table
    let validResults = computedResults.filter(result => typeof result.result === 'number');
    if (validResults.length > 0) {
        let min = Math.min(...validResults.map(result => result.result));
        let max = Math.max(...validResults.map(result => result.result));
        let sum = validResults.reduce((acc, curr) => acc + curr.result, 0);
        let avg = sum / validResults.length;

        let statsHtmlTable = "<h2>Statistics</h2>";
        statsHtmlTable += "<table>";
        statsHtmlTable += "<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>";
        statsHtmlTable += "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + sum.toFixed(2) + "</td></tr>";
        statsHtmlTable += "</table>";

        document.write(statsHtmlTable);
    }
}

calculator();