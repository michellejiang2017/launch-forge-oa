/**
 * accepts a number and returns an array that counts up to that number from 1 (inclusive); 
 * each multiple of 3 is 'yee' and every multiple of 4 is "haw" and every multiple of both is "yeehaw."
 * @param {number} n 
 * @returns result array 
 */
function yeehaw(n) { 
    if (typeof n !== "number") { 
        throw new TypeError("Expected number as input."); 
    }
    let result = [] 
    for (i=1; i<n+1; i++) { 
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

console.log(yeehaw(12)); 
