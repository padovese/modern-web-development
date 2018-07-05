const array = [1.6, 66, 9.9, 4.0];

for (i in array){
    console.log(i, array[i]);
}

const person = {
    firstName: 'Joseph',
    lastName: 'Son',
    age: 29,
    weight: 80
}

for(j in person){
    console.log(`${j} = ${person[j]}`)
}