const valores = [1.0, 5.9, 4.4, 2.8];
console.log(valores[0], valores[3], valores[4]); 

valores[4] = 10;
console.log(valores);

valores.push({id: 03}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());     //delete the last value
delete valores[0];
console.log(valores);