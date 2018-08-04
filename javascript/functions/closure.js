//closure is the scope that wrap the function

const x = 'global';

function one(){
    const x = 'local';
    function two(){
        return x;
    }
    return two;
}

const myFunc = one();
console.log(myFunc());