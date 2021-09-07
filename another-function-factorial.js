function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        console.log(i);
        factorial = factorial * i;
    }
    return factorial;
}

let firstNumber = getFactorial(4);
console.log('my first number is', firstNumber);

let seconNumber = myFactorial(6);
console.log('my second number is', seconNumber);
