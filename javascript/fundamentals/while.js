function generateRandomValue(){
    a = Math.random().toString().charAt(2);
}

generateRandomValue();

while(a < 8){
    console.log(a);
    generateRandomValue();
}