//classic ways
function f1(){ }

const f2 = function (){}

//setting inside an array
const array = [f1, f2, function (a, b){return a+b;}]
console.log(array[2](1, 2));

//inside an object
const obj = {}
obj.speaking = function() {return "speaking..."}

console.log(obj.speaking());

//function as a parameter
function run(fun){
    fun();
}

run(function(){console.log("executing...")});