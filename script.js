function isSameType(value1, value2) {
    // If both values are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    return typeof value1 === typeof value2;
}

// Get input
let input1 = prompt("Enter first value:");
let input2 = prompt("Enter second value:");

// Try converting to numbers
let value1 = Number(input1);
let value2 = Number(input2);

// If conversion fails, keep them as strings
if (Number.isNaN(value1)) {
    value1 = input1;
}
if (Number.isNaN(value2)) {
    value2 = input2;
}

alert(isSameType(value1, value2));