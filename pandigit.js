/**
 * A pandigital number contains all digits (0-9) at least once. 
 * Takes an number, returning true if the number is pandigital, and false otherwise.
 * Note: digits may occur before or after a decimal place & negative numbers are accepted. 
 * @param {number} n The number to check
 * @returns {boolean} true if n pandigital, false otherwise
 */
function pandigital(n) { 
    if (typeof n !== "number") { 
        throw new TypeError("Expected number as input."); 
    }
    let n_array = n.toString().replace(/[-.]/g, "").split("").map(Number); // converts integer to array of digits ignoring - and .
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
    return digits.every(d => n_array.includes(d)); // iterates through digits to find if n_array includes every digit
}

// Test Area 

console.log(pandigital(120)); 
console.log(pandigital(543126789012))
console.log(pandigital(1023456789)); // true
console.log(pandigital(123456789));  // false (missing 0)
console.log(pandigital(543126789012)); // true (repeated digits, still pandigital)
console.log(pandigital(-1023456789)); // should this be true or false?
console.log(pandigital(1023.456789)); // should this throw?