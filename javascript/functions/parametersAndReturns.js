//parameters and returns are optionals

function doSomeMath(a, b){
    value = a * b;

    if(value > 10){
        return (`${value} is greater than 10.`)
    } else{
        return value;
    }
}

console.log(doSomeMath(3, 3));
console.log(doSomeMath(10, 0));
console.log(doSomeMath(6, 6));
console.log(doSomeMath(4));
console.log(doSomeMath(1, 2, 3));