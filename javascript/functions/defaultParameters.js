function sum1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c;
}

console.log(sum1(2));
console.log(sum1('a', 8));
console.log(sum1(0, 0, 02)); //returns 4

function sum2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c;
}

console.log('\n' + sum2());
console.log(sum2(8));
console.log(sum2(8, 9));
console.log(sum2(8, 3, 2));

function sum3(a = 1, b = 2, c = 3){
    return a + b + c;
}

console.log('\n' + sum3());
console.log(sum3(3, 9));