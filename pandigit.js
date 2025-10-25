//A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

function pandigital(n) { 
    
    let n_array = n.toString().split("").map(Number); // converts integer to array of digits 
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return digits.every(d => n_array.includes(d)) // returns true if n_array contains every value of digits & false otherwise
}

console.log(pandigital(120)); 
console.log(pandigital(543126789012))