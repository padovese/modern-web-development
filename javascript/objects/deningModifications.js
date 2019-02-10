//Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Any', price: 1.99, tag: 'for sale'
});

console.log('Extensible: ', Object.isExtensible(product));

product.name = 'Eraser';
product.description = 'White eraser';
delete product.tag;

console.log(product);

//Object.seal
const someone = { name: 'Brad', age: 55 };
Object.seal(someone);
console.log('Sealed: ', Object.isSealed(someone));

someone.lastName = 'Pitt';
delete someone.name;
someone.age = 60;
console.log(someone);

//Object.freeze = sealed and constant valuer.