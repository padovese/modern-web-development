//forEach
const brands = ['merc', 'audi', 'masda'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

brands.forEach(imprimir);

