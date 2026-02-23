// Execution Context
// => Global Execution Context
// ___________________________________________________________________________________
//          Memory Phase                      |           Execution Phase
// |---------------------------------------------------------------------------------|
//  - Creation of Global Object (window in browsers) | - Code is executed line by line  
//
//
//
//
//
// |---------------------------------------------------------------------------------|
// 5. Execution Context: It is an abstract concept that represents the environment in which JavaScript code is executed.
//  It consists of two phases: the creation phase and the execution phase.
//  During the creation phase, the JavaScript engine sets up the environment for the code to run, including creating the global object and setting up the scope chain.
//  During the execution phase, the code is executed line by line, and variables and functions are accessed and manipulated according to their scope and hoisting rules.
//  Understanding execution context is crucial for understanding how JavaScript code is executed and how variables and functions are accessed and manipulated during runtime.
// |---------------------------------------------------------------------------------|

console.log(one()) // undefined, ram
console.log('start')
function one() {
    console.log(name) // undefined
    var name = 'ram';

    three();
    console.log(name) // ram
    return 'shyam';
}

console.log('mid')

function three(){
    return 'hello devs';
}

function two() {
    console.log(age) // err
    let age = 21
        console.log(three()) // hello devs
    console.log(age) // 21
}

console.log(two()) // err, hello devs, 21
console.log("end") // end
one() // undefined, ram

// ___________________________________________________________________________________
//          Memory Phase                      |           Execution Phase
// |---------------------------------------------------------------------------------|
//   Hoisting                                 |                one() is called
//   fn: one()                                |        function execution context
//   fn: two()                                | Memory Execution  |    Execution Phase
//   fn: three()                              |      ...          |   ...
// |---------------------------------------------------------------------------------|

