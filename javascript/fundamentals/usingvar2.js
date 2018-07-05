//var use global escope, excpet if it is inside a function. Different from java.
var number = 1;
{
    var number = 2;
    console.log(number);
}
console.log(number);