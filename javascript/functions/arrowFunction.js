let someFunction = function(a){
    return a * 2;
}

let anotherFunction = (a) => {
    return a * 2;
}

let simpleFunction = a => 2 * a; //implicit return

console.log(someFunction(Math.PI));
console.log(anotherFunction(Math.PI));
console.log(simpleFunction(Math.PI));

let ola = () => "ola"

console.log(ola());