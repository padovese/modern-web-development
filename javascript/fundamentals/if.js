//Converting every kind of value in boolean

function shouldISpeak(value){
    if(value){
        console.log('This value is true: ', value);
    }
}

shouldISpeak(undefined);
shouldISpeak(null);
shouldISpeak(NaN);
shouldISpeak(0);
shouldISpeak('');
shouldISpeak(1);
shouldISpeak('a');
shouldISpeak([0]);
shouldISpeak([1, 2]);
shouldISpeak(typeof shouldISpeak);


Number.prototype.between = function(begin, end){
    return this >= begin && this <= end;
}

function printResult(value){
    if(value.between(1, 10)){
        console.log(value, 'THATS IN');
    }
}

printResult(1);
printResult(10);
printResult(5);
printResult(11);
printResult(0);