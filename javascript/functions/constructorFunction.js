function Car(maxVelocity = 200, delta = 5){

    let actualVelocity = 0;

    this.speedUp = function(){
        if(actualVelocity + delta <= maxVelocity){
            actualVelocity += delta;
        } else{
            actualVelocity = maxVelocity
        }
    }

    this.getActualVelocity = function(){
        return actualVelocity;
    }

}

const lotus = new Car();
lotus.speedUp();

console.log(lotus.getActualVelocity());

const ferrari = new Car(400, 30);
ferrari.speedUp();
ferrari.speedUp();
ferrari.speedUp();

console.log(ferrari.getActualVelocity());