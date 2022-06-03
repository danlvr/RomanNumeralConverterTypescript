"use strict";
let input = document.getElementById("input");
let button = document.getElementById("button");
let result = document.getElementById("result");
button.addEventListener("click", () => {
    if (Number(input.value) > 0) {
        result.innerText = input.value + " in roman numeral is " + convertToRomanNumber(Number(input.value));
    }
    else {
        result.innerText = "Please enter a valid number";
    }
});
function convertToRomanNumber(cardinalNumber) {
    const referenceValue = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
    let result = [];
    referenceValue.forEach((p) => {
        while (cardinalNumber >= p[1]) {
            result.push(p[0]);
            cardinalNumber -= p[1];
        }
    });
    return result.join('');
}
