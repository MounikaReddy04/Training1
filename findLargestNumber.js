// Function to find the largest number among three
function findLargestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Prompt user for three numbers
let num1 = Number(window.prompt("Enter the first number:"));
let num2 = Number(window.prompt("Enter the second number:"));
let num3 = Number(window.prompt("Enter the third number:"));

// Find the largest number
let largest = findLargestNumber(num1, num2, num3);

// Display the result
alert(`The largest number among ${num1}, ${num2}, and ${num3} is ${largest}.`);
console.log(`The largest number among ${num1}, ${num2}, and ${num3} is ${largest}.`);
