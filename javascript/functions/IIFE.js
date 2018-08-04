// IIFE -> immediately invoked function expression

(function lol(){
    console.log('js is stranger');
    console.log('this scope do not take precendence outside');
})() //will be called immediately

lol(); //will not work