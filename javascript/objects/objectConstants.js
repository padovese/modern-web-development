const person = {name: 'Kohnny'}
person.name = 'Mark';

console.log(person.name);

Object.freeze(person); //block the object to be immutable 

person.name= 'Maria';

console.log(person.name);

