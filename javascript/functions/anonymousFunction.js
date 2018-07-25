const sum = function(a, b){
    return a + b;
}

const printResult = function(x, y, operation = sum){
    console.log(operation(x, y));
}

printResult(1, 2);
printResult(3, 4, sum);
printResult(5, 6, function(a, b){
    return a - b;
})

printResult(3, 4, (a, b) => a * b);

const person = {
    speak: function(){
        console.log('Hello there');
    }
}