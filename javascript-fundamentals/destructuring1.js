//old way
const human = {
    name: 'padova',
    age: 99,
    skills: ['java', 'javascript', 'sql'],
    address: {
        planet: 'earth',
        country: 'italy'
    }
}

const name = human.name;
console.log(name);

const skills = human.skills;
console.log(skills[1]);

const planet = human.address.planet;
console.log(planet);