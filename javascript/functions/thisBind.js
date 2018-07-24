//this is not exactly equals to java usage, it can vary depends on the context
const person = {
    text: 'good morning',
    speak(){
        console.log(this.text);
    }
}

person.speak();

//Another way
const speakFromPerson = person.speak.bind(person);
speakFromPerson();