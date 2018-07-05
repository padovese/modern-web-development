for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(i); //the variable is visible outside

for(let j = 0; j < 10; j++){
    console.log(j);
}
console.log(j); //the variable is not visible, equals to java