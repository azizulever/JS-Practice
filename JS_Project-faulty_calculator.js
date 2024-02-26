// let a = prompt("First Number: ");
// let operator = prompt();
// let b = prompt("Second Number: ");
let a = 3, b = 4, operator = "+";

let rand = Math.random();
// console.log(rand);

if(rand < 0.1) {
    if(operator == "+") {
        console.log(a-b);
    } else if(operator == "-") {
        console.log(a/b);
    } else if(operator == "*") {
        console.log(a+b);
    } else {
        console.log(a**b);
    }    
}

else {
    if(operator == "+") {
        console.log(a+b);
    } else if(operator == "-") {
        console.log(a-b);
    } else if(operator == "*") {
        console.log(a*b);
    } else {
        console.log(a/b);
    }    
}


