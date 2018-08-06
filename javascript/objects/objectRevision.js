//It's a way, but a barbaric one
const product = new Object
product.name = 'chair'
product.price = 220

console.log(product);

//The regular one
car = {
    name: 'Mazda',
    price: 90000,
    specs: {
        valve: 4,
        HP: 7000
    },
    owners: [
        {
            name: 'owner 1',
            since: 2010
        },
        {
            name: 'owner 2',
            since: 2014
        }
    ]
}

console.log(car);
console.log(car.owners[0]);
console.log(car.price);