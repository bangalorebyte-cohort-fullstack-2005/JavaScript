console.log('JavaScript Objects')

// JavaScript Primitive DataTypes:
// string
// number
// boolean
// null
// undefined

// Type Casting
// Converting a data type into another is known as type casting. 
// Sometimes there is a need to convert the data type of one value to another.

// Converting to Boolean
// To convert a value to boolean data type, just pass the value to Boolean function

var b = 1;
b = Boolean(b);
console.log(b,typeof b);

// Converting to String
// To convert a value to string data type, just pass the value to String function.

var s = 1;
s= String(s);
console.log(s,typeof s);

// Converting to Number
// Many times string needs to get converted into numbers. 
// To convert a value to number data type, just pass the value to Number function.

var n1 = true;
var n2 = "123str";
var n3 = "123.55";

n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

console.log(typeof n1,typeof n2,typeof n3,n1,n2,n3)

// parseInt
// parseInt() function is used to convert strings values into numbers. 
// It works differently than Number() function. It doesn't work for boolean or other 
// data-types values. For others values or string that doen't contain numbers in it, 
// parseInt() will just output NaN. Examples will clear this idea.

var n1 = true;
var n2 = "1str";
var n3 = "123";
var n4 = "1str123str1";

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);
n4 = parseInt(n4);

console.log(typeof n1,typeof n2,typeof n3,n1,n2,n3,n4)

// parseFloat
// parseFloat() function is used to convert strings values into floating point numbers. 
// It works similar to parseInt() function with an exception of handling decimal point numbers. 
// For example, 1.23 is represented as 123e-2. parseInt("123e-2") will result in 123 but parseFloat("123e-2") 
// will give 1.23

var n1 = "123e-2";
var n2 = "1str";
var n3 = "123";
var n4 = "str123str1";

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

console.log(n1,n2,n3,n4)

// The Object class represents one of JavaScript's data types. 
// It is used to store various keyed collections and more complex entities. 
// Objects can be created using the Object() constructor.

// Creating a JavaScript Object
//     With JavaScript, you can define and create your own objects.
//     There are different ways to create new objects:
//     1. Define and create a single object, using an object literal.
//     2. Define and create a single object, with the keyword new and object constructor.

// using object literals
// object literals are similar to dictionaries in python
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
// console.log(person.firstName)


// Using the JavaScript Keyword new
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Objects are mutable: They are addressed by reference, not by value.
// If person is an object, the following statement will not create a copy of person:
var x = person;   // This will not create a copy of person.
console.log(x)

// var person = {firstname:"John", lastname:"Doe", age:50, eyeColor:"blue"}
// var x = person;
x.age = 10;  // This will change both x.age and person.age

// person.address = 100
console.log(person)
console.log(x)

// JavaScript Object Properties

// Properties are the values associated with a JavaScript object.
// A JavaScript object is a collection of unordered properties.
// Properties can usually be changed, added, and deleted

// Accessing JavaScript Properties:
// 1. objectName.property 
// 2. objectName["property"] 

// console.log(person.firstName + " is " + person.age + " years old.")
// console.log(person["firstname"] + " is " + person["age"] + " years old.")

// Looping through properties
var person = {fname:"John", lname:"Doe", age:25};
for (prop in person) {
  console.log(person[prop])
}

// Adding New Properties
person["nationality"] = "English"
console.log(person)

// Deleting Properties
delete person.age
console.log(person)

// delete person
delete person
console.log(person)

// The delete keyword deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.
// The delete operator is designed to be used on object properties. It has no effect on variables or functions.




// JavaScript Object Methods

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    // fullName : function() {
    //   return this.firstName + " " + this.lastName;
    // }
  }
// console.log(person.fullName())

// The this Keyword
// In an object method, this refers to the "owner" of the method.
// In the example above, "this" is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.
// Link: w3schools.com/js/js_this.asp

// Accessing Object Methods:
// objectName.methodName()
// You will typically describe fullName() as a method of the person object, 
// name = person.fullName()
// console.log(name)

// Using Built-In Methods
var message = "Hello world!"
var x = message.toUpperCase()
console.log(x) 

// Adding a Method to an Object

person.fullName = function () {
    return this.firstName + " " + this.lastName;
  }

console.log(person.fullName())

  // JavaScipt Classes

// class Car {
//   constructor(brand) {
//     this.carname = brand
//     console.log(`object ${brand} created.`)
//   }
// }

// The keyword class is used to create a class, and in javascript the constructor() method is
// used as an init method. The constructor method is called each time the class object is initialized.

// mycar1 = new Car("Ford")
// mycar2 = new Car("Honda")


// Sometimes we need a "blueprint" for creating many objects of the same "type".
// Objects of the same type are created by calling the constructor function with the new keyword:

// Methods in classes

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   drive() {
//     console.log(`${this.carname} driving`)
//   }
// }

// mycar1 = new Car("Ford")
// mycar2 = new Car("Honda")

// mycar1.drive()
// mycar2.drive()


// Static Methods
  // Static methods are defined on the class itself, and not on the prototype.
  // That means you cannot call a static method on the object (mycar), but on the class (Car).

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   static beep() {
//     console.log(`Beep beep!!`)
//   }
// }
  
// // mycar.beep()
// Car.beep()



// Inheritance
  // To create a class inheritance, use the extends keyword.
  // A class created with a class inheritance inherits all the methods from another class

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'Presenting ' + this.carname ;
  }
}
  
class Model extends Car {
  constructor(brand,mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
mycar_1 = new Car("Ford") 
mycar = new Model("Ford","Mustang")
console.log(mycar.show())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes





// Scope in computerScience
// In computer programming, the scope of a name binding(an association of a name to an entity, 
// such as a variable)is the region of a computer program where the binding is valid: 
// where the name can be used to refer to the entity. 
// Such a region is referred to as a scope block.

// The current context of execution. The context in which values and expressions are 
// "visible" or can be referenced. If a variable or other expression is not "in the current scope," 
// then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes 
// have access to parent scopes, but not vice versa.


// Javascript Scope
    // Scope determines the accessibility (visibility) of variables.
    // In JavaScript there are two types of scope:
    //     Local scope
    //     Global scope
   
// Example 1:

// // code here can NOT use carName

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}

// // code here can NOT use carName




// Example 2: Global Scope

let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName  
  console.log(carName)
}

myFunction()

// Link: https://developer.mozilla.org/en-US/docs/Glossary/Scope






// Javascript Closure


// let x = [1,2,3,4]


// function add(x, y){
//     const a = 40
//     function product(p){
//         return a*p
//     }
// }

// function add(x, y){
//     console.log(x+y)
// }

// function product(p){
//     const a = 40
//     console.log(p*a)
//     return p*a   
// }

// add(product(10), 100)
// add(400,100)

// What is a lexical environment?
  // A lexical environment is a data structure that holds identifier-variable mapping.
  //     (here identifier refers to the name of variables/functions, and the variable is
  //     the reference to actual object [including function type object] or primitive value).

// What is lexical scope in javascript?
  // A lexical scope in JavaScript means that a variable defined outside a function can be
  // accessible inside another function defined after the variable declaration. 
  // But the opposite is not true, i.e. the variables defined inside a function will not be
  // accessible outside that function.


// What is a closure in JavaScript?
  // A closure is the combination of a function bundled together (enclosed) with references to its
  // surrounding state (the lexical environment). In other words, a closure gives you access to
  // an outer function’s scope from an inner function. In JavaScript, closures are created every
  // time a function is created, at function creation time.
      // Functions in JavaScript form closures. 
      // A closure is the combination of a function and the lexical environment within which that
      // function was declared. 

// MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// W3schools Link: https://www.w3schools.com/js/js_function_closures.asp
// Medium Link: https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4