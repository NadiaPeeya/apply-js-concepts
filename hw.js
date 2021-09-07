function calculateGrade(number) {
    if (number >= 90) {
        console.log('you got an A');
    }
    else if (number >= 80 && number <= 89) {
        console.log('You got an B');
    }
    else if (number >= 70 && number <= 79) {
        console.log('You got an C');
    }
    else if (number >= 60 && number <= 69) {
        console.log('You got an D');
    }
    else if (number >= 50 && number <= 59) {
        console.log('You got F');
    }
    else {
        console.log('you are a gadha')
    }
    return number;
}
var obtainedMark = 56;
var result = calculateGrade(obtainedMark);
console.log(result);