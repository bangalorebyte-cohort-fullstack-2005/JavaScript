// alert("This is an alert")

console.log("hello World")
console.error("this is an error")
console.warn("this is warning")

// var, let , const 

// let age = 30;
// age = 50;
// console.log(age)

// strings, numbers ,Boolean, null, undefined

const name="john";
const age = 20;
const rating = 4.5;
const isCool = true ;
const g = null;
const z = undefined;

console.log(typeof name,typeof age,typeof rating,typeof isCool,typeof g , typeof z) 


// concatenation
console.log("my name is " + name + ' and i am ' + age);
// template string
console.log(`My name is ${name}`)

const s = "hello world"

console.log(s.toUpperCase())
console.log(s.substring(0,5).toUpperCase());
console.log(s.split('w'))

// array
const number = new Array(1,2,3,4,5)
console.log(number)

const fruits = ['apples','pinapple','pears']


fruits[2] = 'grapes';
fruits.push('mangos');
fruits.pop();
console.log(Array.isArray("hello"))
console.log(fruits.indexOf('pinapple'))
console.log(fruits)
console.log(fruits[2])

// object literals

const person = {
    firstname : 'vivek',
    lastname : 'j',
    age:25,
    hobbies:['music','swimming','reading'],
    address : {
        street : '2nd cross',
        city : "bangalore" ,
        state : 'karnataka'
    }
}
console.log(person)
console.log(person.firstname, person.lastname,person.hobbies)
console.log(person.hobbies[2])

person.email = "vivek@gmail.com"
console.log(person)

const todos = [
    {
        id:1,
        text:"i need to work",
        iscompleted:true
    },
    {
        id:2,
        text:"i need to sleep",
        iscompleted:true
    },
    {
        id:3,
        text:"i need to eat",
        iscompleted:false
    }
]
console.log(todos[2].text)

//Json Format

const todojson = JSON.stringify(todos);
console.log(todojson)

// for loop
for(let i=0; i<10; i++){
    console.log(`for loop number ${i}`)
}
 
// while loop
let i=0
while(i<10){
    console.log(`while loop number ${i}`)
    i++
}

// for loop array
for(let i=0; i<todos.length; i++) {
    console.log(todos[i].text);
}

//for other method

for(let todo of todos){
    console.log(todo.text);
}

// high order array method
// foreach, map ,filter

const todotext = todos.map(function(todo){
    return todo.text;
});
console.log(todotext)


const todocompleted = todos.filter(function(todo){
    return todo.iscompleted == true;
}).map(function(todo) {
    return todo.text;
});

console.log(todocompleted)

// if-else -conditional statements
const check_x = 4;
if(check_x === 10) {
    console.log('x is 10')
} else if(check_x == 4) {
    console.log('x is 4')
} 
else {
    console.log('x is not equal to 10')
}

// && and || conditions
const check_y = 4;
const check_z = 7;
if(check_y>5 || check_z<5) {
    console.log("y is not more than 5 and z is more than 5")
}

// Ternary operator  [?]

const check_t = 9;

const check_c = check_t == 5 ? '5' : '9';

console.log(check_c)

// switch
switch(check_c) {
    case '9':
        console.log('Number is 9');
        break;
    case '5':
        console.log('Number is 5');
        break;
    default:
        console.log('Number is not 9 or 5');
        break;
}   

// functions
function addnums(num1=1,num2=2) {
    console.log(num1+num2)
}

addnums(5,5);

// arrow functions
const addnums_1 = (num1,num2) => console.log(num1+num2);

addnums_1(5,10)

// oops
// constructor function
function Person(firstname,lastname,dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
     
        // this.getfullname = function(){
        //     return `${this.firstname} ${this.lastname}`;
        // }\
Person.prototype.getbirthyear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getfullname = function() {
    return `${this.firstname} ${this.lastname}`;
}

}

// instantiate object
const person1 = new Person('vivek','j','17-07-1995');

console.log(person1)

// class
class Person_1 {
    constructor(firstname,lastname,dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
}    
getbirthyear = function() {
    return this.dob.getFullYear();
}

getfullname = function() {
    return `${this.firstname} ${this.lastname}`;
}
}

const person_2 = new Person_1('vivek','j','17-07-1995');

console.log(person_2)

// DOM

// single element 
// const form = document.getElementById("my-form");
// console.log(form);
const form = document.querySelector('#my-form')
console.log(form)

// multiple element\
// console.log(document.querySelectorAll('.items'));
// console.log(document.getElementsByClassName('item'));

const ul = document.querySelector('.items');

// ul.remove()
ul.lastElementChild.textContent = "hello";
ul.children[1].innerText = 'vivek';
ul.children[1].innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red' ;

// Events
btn.addEventListener('click',(e) => {
    e.preventDefault()
    console.log(e.target.className);
});
``
