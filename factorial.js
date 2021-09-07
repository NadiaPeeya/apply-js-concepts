// 
// 3! = 3 x 2 x 1
// 4! = 4 x 3 x 2 x 1
// 5! = 5 x 4 x 3 x 2 x 1
// 6! = 6 x 5 x 4 x 3 x 2 x 1
// 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
// 


var factorial = 1;
for (var i = 1; i <= 7; i++) {
    console.log(i);
    factorial = factorial * i;
}

var factorial = 1;
for (let i = 1; i <= 5; i++) {
    console.log(i);
    factorial = factorial * i;
}

var factorial = 1;
for (let i = 0; i <= 8; i++) {
    console.log(i);
    factorial = factorial * i;
}

