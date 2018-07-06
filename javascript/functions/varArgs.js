//similar to Java's varArgs 
function varArgs(){
    let c = 0;
    for(i in arguments){
        c = c + arguments[i];
    }
    return c;
}

console.log(varArgs(1, 2));
console.log(varArgs(3, 1.9));
console.log(varArgs(1, 2, 'a'));
console.log(varArgs('a', 1, 2));
