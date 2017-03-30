var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//Konzola F12

console.log(person.firstName);
console.log(person.age);

var bob=new Object();
bob.name="Bob Smith";

bob.setAge = function (newAge) {
    this.age = newAge;
};


bob.setAge(20);

console.log(bob.age);