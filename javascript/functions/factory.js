//sample factory

function createCar(brand, name, price){
    return {
        brand,
        name,
        price,
        year: new Date().getUTCFullYear()
    };
}

console.log(createCar('GM', 'camaro', '25000'));
console.log(createCar('Ford', 'mustang', '26000'));