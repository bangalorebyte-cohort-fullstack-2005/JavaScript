https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// Sync Javascript code
// Promises - https://medium.com/javascript-in-plain-english/truly-understanding-promises-in-javascript-cb31ee487860
function display(){
    console.log('Running Display Function')
}

console.log('Start')
display()
console.log('End')



// // Async Javascript code

console.log('Start')
setTimeout(() => {
    console.log('Running this in setTimout callback')
}, 5000)
console.log('End')


// Javascript Callbacks
    // Callbacks are a great way to handle something after something else
    // has been completed. By something here we mean a function execution.
    // If we want to execute a function right after the return of some other
    // function, then callbacks can be used.

// function add(a, b){ 
//     console.log(`The sum of ${a} and ${b} is ${a+b}.`) 
//     disp()
//     } 
 
// function disp(){ 
//     console.log('This must be printed after addition') 
//     } 

// add(5,6); 
// disp()

// Another way of writing the same callback function:
function add(a, b , callback){ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.`) 
    callback()
} 
// we can define the callback function in the add function call 
add(5,6, function disp(){ 
    console.log('This must be printed after addition.') 
})

add(5,6, () => console.log('This must be printed after addition.'))





// using arrow function
// x = console.log('running this in callback')
// add(5,6, () => (x))

// Async 
// async function firstAsync() {
//     return 27;
//   }
  
//   firstAsync().then(alert); // 27



//   Async and await together here
async function firstAsync() {
    let promise = new Promise((res, rej) => {
        function add(a, b){ 
            console.log(`The sum of ${a} and ${b} is ${a+b}.`) 
            disp()
            } 
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    alert(result); 
    };

firstAsync();
  






