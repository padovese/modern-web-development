//Object to JSON
const obj = {a: 1, b: 2, c: 3, sum() { return a + b + c} };
console.log(JSON.stringify(obj));

//JSON to object
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));