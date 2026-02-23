// Execution Context
// => Global Execution Context
//  _________________________________________________________________________________
// |        Memory Phase                      |           Execution Phase            |
// |---------------------------------------------------------------------------------|
//  - Creation of Global Object (window in browsers) | - Code is executed line by line  
//
//
//
//
//
// |---------------------------------------------------------------------------------|
// 5. Execution Context:
//  It is an abstract concept that represents the environment in which JavaScript code is executed.
//  It consists of two phases: the creation phase and the execution phase.
//  During the creation phase, the JavaScript engine sets up the environment for the code to run, including creating the global object and setting up the scope chain.
//  During the execution phase, the code is executed line by line, and variables and functions are accessed and manipulated according to their scope and hoisting rules.
//  Understanding execution context is crucial for understanding how JavaScript code is executed and how variables and functions are accessed and manipulated during runtime.
// |---------------------------------------------------------------------------------|

// console.log(one()) // undefined, ram
// console.log('start')
// function one() {
//     console.log(name) // undefined
//     var name = 'ram';

//     three();
//     console.log(name) // ram
//     return 'shyam';
// }

// console.log('mid')

// function three(){
//     return 'hello devs';
// }

// function two() {
//     console.log(age) // err
//     let age = 21
//         console.log(three()) // hello devs
//     console.log(age) // 21
// }

// console.log(two()) // err, hello devs, 21
// console.log("end") // end
// one() // undefined, ram

//  _________________________________________________________________________________
// |        Memory Phase                      |           Execution Phase            |
// |---------------------------------------------------------------------------------|
// | Hoisting                                 |                one() is called       |
// | fn: one()                                |        function execution context    |
// | fn: two()                                | Memory Execution  |   Execution Phase|
// | fn: three()                              |      ...          |       ...        |
// |_________________________________________________________________________________|
//
//
//
// |---------------------------------------------------------------------------------|
// 6. Event Loop:
//  It is a programming construct that allows JavaScript to perform non-blocking operations by offloading tasks to the system kernel whenever possible.
//  The event loop continuously checks the call stack and the task queue. If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack for execution.
//  This allows JavaScript to handle asynchronous operations, such as user interactions, network requests, and timers, without blocking the main thread of execution.
//  Understanding the event loop is crucial for writing efficient and responsive JavaScript code, especially when dealing with asynchronous operations.
// |---------------------------------------------------------------------------------|

console.log("start")
setInterval(()=>{
    three() // inside three
}, 10000)
function one() {
    console.log(name) // undefined
    var name = 'love';

    return name;
    console.log(three())
}
setTimeout(() => {
    console.log(one()) // undefined, love
},3000)

function two() {
    console.log(age) // err
    var age = 25
    console.log(three()) // inside three
    return age;
}
function three() {
    console.log("inside three")
}
console.log('mid')
setTimeout(() => {
    console.log(two()) // undefined, love
}, 5000)

console.log("end")

//                                         Event Loop
//  ________________________________________________________________________________________________
// |            Call Stack                      |                Web API / Container                |
// |--------------------------------------------|---------------------------------------------------|
// |                                            |                                                   |
// |                                            |                                                   |
// |                                            |                                                   |
// |------------------------------------Callback Queue----------------------------------------------|
// |                                                                                                |
// |                                                                                                |
// |                                                                                                |
// |________________________________________________________________________________________________|
// 
// *CallStack =>
//  It is an JS Engine having V8 Engine for running JS code .
//  It contains Synchronos Code but it can also contain Asynchronos code but it will not execute it instead
//  it will send it to Web API and once the task is completed it will send the callback to Callback Queue then
//  Event Loop will check if the Call Stack is empty or not if it is empty then it will push the callback to Call Stack for execution.

// *Web API / Container => 
//  It runs the Asynchronos code and once the task is completed it will send the callback to Callback Queue. It
//  is provided by the browser or Node.js environment and it contains APIs for handling tasks such as timers, network requests, and DOM manipulation.

// *Callback Queue =>
//  It is a queue that holds the callbacks that are waiting to be executed. When an asynchronous task is completed, its callback is added to the callback queue.
//  The event loop continuously checks the callback queue and pushes callbacks onto the call stack for execution when the call stack is empty.

