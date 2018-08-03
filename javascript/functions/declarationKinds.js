console.log(sum(1, 2)); //can be called even before the declarion

function sum(a, b){
    return a + b;
}

const sum2 = function(a, b){
    return a + b; 
}

console.log(sum2(1, 2)); //can be called only after declaration

const sum3 = function sum3(a, b){
    return a + b;
}

console.log(sum3(1, 2)); //can be called only after declaration