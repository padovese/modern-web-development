class Person{
    constructor(nome){
        this.nome = nome;
    }

    speak(){
        console.log(`my name is ${this.nome}`);
    }
}

new Person('padova').speak();

let Person2 = nome => {
    return{
        speak: () => console.log(`my name is ${nome}`)
    }
}

Person2('padovese').speak();