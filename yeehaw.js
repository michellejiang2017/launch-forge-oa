/**
 * Accepts a number n and returns an array counting from 1..n (inclusive).
 * each multiple of 3 is 'yee' and every multiple of 4 is "haw" and every multiple of both is "yeehaw."
 * @param {number} n The number to check
 * @returns {Array<number|string>} result array following the rules above
 */
function yeehaw(n) { 
    if (typeof n !== "number") { 
        throw new TypeError("Expected number as input."); 
    }
    let result = [] 
    for (let i=1; i<n+1; i++) { 
        if (i % 3 == 0 && i % 4 == 0) {
            result.push("yeehaw"); 
        } else if (i % 3 == 0) { 
            result.push("yee"); 
        } else if (i % 4 == 0) {
            result.push("haw");
        } else { 
            result.push(i); 
        }
    }
    return result;
}

// Test Area

console.log("yeehaw(12) =>", yeehaw(12));
// Edge cases
console.log("yeehaw(0)  =>", yeehaw(0));     // []
console.log("yeehaw(-3) =>", yeehaw(-3));    // []

// Non-integer input: 7.9 -> treated as 7 (floored)
console.log("yeehaw(7.9)=>", yeehaw(7.9));

// Type errors
try {
  console.log(yeehaw("12"));
} catch (err) {
  console.error("expected error for non-number input:", err.message);
}