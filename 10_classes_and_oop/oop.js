const user = {
    username: "ashwani",
    loginCount: 56,
    signedIn: true,
    
    getUerDetails: function(){
       // console.log("got user details from database");
       //console.log(`username ${this.username}`)

       console.log(this); //this >>know current context in the memory , this key know all things 
       
    }

}
//console.log(user.username);
//console.log(user.getUerDetails());


// this keywords print in the Global context what are the value we get
 //console.log(this); // In the node we get empty {} ..but in webrouser we get the multiple things window 
 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
       this.greeting = function(){    // we are also add method
        console.log(`welcome to new world ${this.username}`);
        
       }
    return this
}
// const userOne = User("hitesh",12,true)
// const userTwo = User("ashwani",11, false) // userTwo override the value in useOne ... 
// console.log(userOne);

//contructor funtion always give new instances or give new copy , it is not affect the other intances or value
// add only ......new
const userOne = new User("pranjal",12,true)
const userTwo = new User("ashwani",11, false) // userTwo override the value in useOne ... 
console.log(userOne);
console.log(userTwo);

// then if you remove return this // return this
// 1. new = when we add the new keyword , then create the empty object and also called instances ...{}
// 2. due to new keyword contuction funtion called all the agrument are packed then give
// 3 . In this keyword all the argument  inject 
// 4. then get in funtion


// how check the property of constructor  ....reference of own data
console.log(userOne.constructor);
