//just a test
function abc(){return 1}
console.log(typeof abc() ? abc() : 'no')



const d1 = new Date();
const d2 = new Date();

console.log(d1);
console.log(d1.getMonth());

console.log(d1 == d2);
console.log(d1 === d2);

console.log(undefined == null)
console.log(undefined === null)



const resultado = nota => nota > 7 ? 'aprovado' : 'reprovado';
console.log(resultado(1));
console.log(resultado(8));