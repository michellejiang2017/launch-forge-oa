//A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

function pandigital(n) { 
    let n_array = n.toString().split("").map(Number); // converts integer to array of digits 
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (n_array.length >= 10) {
        if (n_array.includes(0) 
            && n_array.includes(1) 
            && n_array.includes(2) 
            && n_array.includes(3) 
            && n_array.includes(4)
            && n_array.includes(5)
            && n_array.includes(6)
            && n_array.includes(7)
            && n_array.includes(8)
            && n_array.includes(9)
         ) { 
            return true; 
         }
    } else { 
        return false; 
    }
}

console.log(pandigital(120)); 