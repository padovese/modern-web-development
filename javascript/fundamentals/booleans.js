let isAtivo = 1;

console.log(isAtivo);
console.log(!!isAtivo);
console.log(!isAtivo);

let isInavtivo = 0;

console.log(isInavtivo);
console.log(!!isInavtivo);
console.log(!isInavtivo);


console.log(!!'');
console.log(!!'a');
console.log(!!NaN);
console.log(!!undefined);

const a = 10;
const b = 0;
const z = 5;

console.log(b || a || z);    //Retorna primeira ocasiao verdadeira

let c = 9;
let d;

console.log(d || c)

console.log(d ? d : c);