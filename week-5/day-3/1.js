// Callback hell or Pyramid Doom is an situation where we have multiple nested callbacks, which can make the code difficult to read and maintain.
//  It occurs when we have a series of asynchronous operations that depend on each other, and we end up with multiple levels of nested callbacks.
//  solution of callback hell is promises.
//
//  a promise is an object that may produce a single value some time in the future: eigher a resolved value or a reason that it's not resolved
//  (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
//
//  Promises are used to handle asynchronous operations in JavaScript and provide a cleaner and more manageable way to work with asynchronous code compared to callbacks.
//  A Prmise have 3 states => pending, fulfilled and rejected
//
//  res -> resolve and rej -> reject
// ------------------------------------------------------------------------------------|
const promise = new Promise((res,rej) => {
    return res("Promise resolved successfully");
})

// get values from promise

promise 
    .then((value) => console.log(value)) // Promise resolved successfully
    .catch((error) => console.log(error)); // This will not be called since the promise is resolved successfully
