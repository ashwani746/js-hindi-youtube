 function multiply(n){
    return n*5
 }

 multiply.power = 5

console.log(multiply(6));
console.log(multiply.power);
console.log(multiply.prototype);
////////////////////////
function createUser(username, score)
{
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){   // jisne ushe bulaya uska score 
    this.score++;

}

createUser.prototype.printMe = function (){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai",67)
const tea = createUser("tea",69)

chai.printMe()
/*
A new object is created :The new keyword is initiates the creation  of a new Javascipt object.

A prototype is linked : The new created object gets linked to the prototypes property of the constructor funtion . 
this means that it has access to properties and methods defined on the constructors's prototypes'



*/