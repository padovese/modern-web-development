//all of them do the same as a regular function in the end

//function in a variable
const imprimirSoma = function(a, b = 0){
    console.log(a + b);
}

imprimirSoma(1);


//Arrow function
const soma = (a, b) => {
    return a + b;
}

console.log(soma(1,2));

//implicit return
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 4));

const imprimir = a => console.log(a);
imprimir('lol');