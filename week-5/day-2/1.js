//-----------------------------------------------------------------------------------|
// - synchronous programming: code is executed line by line, one after the other.
//      Each line of code must finish executing before the next line can start. 
//      If a line of code takes a long time to execute, it will block the execution of the subsequent lines until it finishes.
//-----------------------------------------------------------------------------------|
// console.log("start");

// function myFunction() {
//     console.log("inside function");
// }

// myFunction();

// console.log("end");


//-----------------------------------------------------------------------------------|
// - asynchronous programming: code can be executed out of order, allowing for tasks to run concurrently. 
//      This means that while one task is waiting for a response (like fetching data from an API),
//      other tasks can continue to execute without being blocked.   
//-----------------------------------------------------------------------------------|
console.log("start");

function myFunction(callback) {
    setTimeout(() => {
        callback("inside function");    
    }, 1000);   

    setInterval(() => {
        console.log("Interval")
    }, 3000)
}

myFunction((e) => {
    console.log(e);
});

console.log("end");