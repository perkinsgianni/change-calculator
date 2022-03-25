// multi-level moneyDenomination object
let moneyDenomination = [
    {denomination: "twenties", value: 20},
    {denomination: "tens", value: 10},
    {denomination: "fives", value: 5},
    {denomination: "twos", value: 2},
    {denomination: "dollars", value: 1},
    {denomination: "quarters", value: 0.25},
    {denomination: "dimes", value: 0.10},
    {denomination: "nickels", value: 0.05},
    {denomination: "pennies", value: 0.01}
];

// function that calculates change of each denomination and displays value
function calculateChange(amountDue, amountReceived) {
    // calculate change
    let change = amountReceived - amountDue;

    // iterate through properties of moneyDenomination object
    for ( entry of moneyDenomination ) {
        // assign properties to entry variable
        let {denomination, value} = entry;

        // if quotient of (change/value) rounded down to nearest/equal integer is greater than 0
        if ( Math.floor(change / value) > 0 ) {
            // display quotient according to corresponding denomination
            document.getElementById(`${denomination}-output`).innerHTML = Math.floor(change / value);
        } else if ( Math.floor(change / value) < 0 ) {
            document.getElementById(`${denomination}-output`).innerHTML = '';
        }
    // determine which denomination(s) comprise(s) change by calculating which quotient (rounded to two decimal places) has a remainder of 0
    change = (change % value).toFixed(2);
    }
};

// submit button (handle click event) function
function submitButton() {
    // target and assign input elements
    const amountDue = parseFloat(document.getElementById("amount-due").value);
    const amountReceived = parseFloat(document.getElementById("amount-received").value);

    // result of change calculation
    let result = calculateChange(amountDue, amountReceived);
};

// reset button (handle click event) function
function resetButton() {
    // clear amount due
    document.getElementById("amount-due").value = '';
    // clear amount received
    document.getElementById("amount-received").value = '';
    //clear denomination output
    document.getElementById("twenties-output").innerHTML = '';
    document.getElementById("tens-output").innerHTML = '';
    document.getElementById("fives-output").innerHTML= '';
    document.getElementById("twos-output").innerHTML = '';
    document.getElementById("dollars-output").innerHTML = '';
    document.getElementById("quarters-output").innerHTML = '';
    document.getElementById("dimes-output").innerHTML = '';
    document.getElementById("nickels-output").innerHTML = '';
    document.getElementById("pennies-output").innerHTML = '';
};

// target calculate button and set onclick method to use submitButton function
document.getElementById("calculate-change").addEventListener("click", submitButton);

// target reset button and set onclick method to use submitButton function
document.getElementById("reset").addEventListener("click", resetButton);