//using var, doesnt work well
const funcs = [];

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[1]();
funcs[2]();

//using let
const funcs2 = [];

for(let j = 0; j < 10; j++){
    funcs2.push(function(){
        console.log(j);
    })
}

funcs2[1]();
funcs2[2]();