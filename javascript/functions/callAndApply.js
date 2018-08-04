function getPrice(tax = 0.0, currency = 'R$'){
    return `${currency} ${this.price + (this.price * tax)}`;
}

const product = {
    name: 'something',
    price: 100,
    getPrice
}

global.price = 20 //Create a global context
console.log(getPrice());
console.log(product.getPrice());

//using call and apply
const anotherProduct = {
    price: 500
}

console.log(getPrice.call(anotherProduct));
console.log(getPrice.apply(anotherProduct));

console.log(getPrice.call(anotherProduct, 0.1, '$'));       //using parameter
console.log(getPrice.apply(anotherProduct, [0.2, 'U$']));   //using parameter need to be inside and array