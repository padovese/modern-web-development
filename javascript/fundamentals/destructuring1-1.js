//new way ES2015 ES6
const human = {
    name: 'padovese',
    age: 99,
    skills: ['java', 'javascript', 'sql'],
    address: {
        planet: 'earth',
        country: 'italy'
    }
}

const {name, age} = human
console.log(name, age)