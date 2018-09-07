console.log(typeof Object, typeof new Object);

// using literal notation
const objct1 = {}
console.log(objct1);
console.log(typeof objct1);

//instantiating like java
const objct2 = new Object;
console.log(objct2);
console.log(typeof objct2);

//Contructor functions

function Product(name, price, discount){
    this.name = name;
    this.getPriceWithDiscount = () => {
        return price * (1 - discount);
    }
}

const shampoo = new Product("dove", 19.99, 5)
console.log(shampoo);
console.log(typeof shampoo);

function createEmployee(name, baseSalary, absence){
    return{
        name,
        baseSalary,
        absence,
        getSalary(){
            return (baseSalary / 30) * (30 - absence)
        }
    }
}

const johnny = createEmployee("johnny", 7000, 2);
console.log(johnny);
console.log(typeof johnny);

console.log(createEmployee("maria", 8000, 1).getSalary());