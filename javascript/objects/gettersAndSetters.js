const seq = {
    _value: 1, //_ is for convention to indicates that it is private
    get value(){
        return this._value;
    },
    set value(value){
        this._value = value;
    }
}

console.log(seq);

console.log(seq.value);

seq.value = 9;

console.log(seq.value);
