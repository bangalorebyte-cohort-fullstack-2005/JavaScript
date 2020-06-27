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