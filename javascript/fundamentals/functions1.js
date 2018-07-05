function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(1, 2);
imprimirSoma(1);
imprimirSoma(1, 2, 10, 5, 9);

function soma(a = 0, b = 0){
    return a + b;
}

console.log(soma());
console.log(soma(2));
console.log(soma(2, 9));