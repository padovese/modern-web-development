console.log(Math.ceil(6.1));
console.log(Math.floor(6.1));

const obj1 = {}
obj1.nome = 'Ball'
console.log(obj1.nome);


function Obj(nome){
    this.nome = nome;
}

Obj('padovese');
console.log(nome);

//Cria objeto com os atributos da funcao
const obj2 = new Obj('cadeira')
console.log(obj2.nome)