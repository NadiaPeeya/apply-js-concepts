
// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     factorial = factorial * 1;
// }
// console.log(factorial);

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        console.log(i);
        fact = fact * i;
    }
    return fact;
}

var result = factorial(7);
console.log('factorial of 7 is ', result);

var result2 = factorial(9);
console.log('factorial of 9 is', result2)