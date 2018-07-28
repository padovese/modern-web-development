const values = [7.7, 6.5, 8.9, 1.5, 0.5, 9.0];

//with no callback
const lowValues = []
for(let i in values){
    if(values[i] < 7){
        lowValues.push(values[i]);
    }
}

console.log(lowValues);

//with callback
const lowValues2 = values.filter(function (value){
    return value < 7;
});

console.log(lowValues2);

//callback with arrow function
const lowValues3 = values.filter(value => value < 7);

console.log(lowValues3);