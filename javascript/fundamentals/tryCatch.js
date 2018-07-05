const human = {
    name: 'padova',
    age: 32
}

try{
    console.log(human.nome.toUpperCase() + "!");
} catch(e){
    logaOErro(e);
} finally{
    console.log('fim');
}

function logaOErro(erro){
    throw{
    name: erro.name,
    message: erro.message,
    date: new Date
    }
}