const value = 'global';

function one(){
    console.log(value);
}

function two(){
    const value = 'local';
    console.log(value);
}

one();
two();

//lol