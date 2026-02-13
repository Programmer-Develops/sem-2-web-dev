// callback hell or Pyramid Doom is an situation where we have multiple nested callbacks, which can make the code difficult to read and maintain.
// It occurs when we have a series of asynchronous operations that depend on each other, and we end up with multiple levels of nested callbacks.
// solution of callback hell is promises.

let myPromise = new Promise((res, rej) => {
    res("Promise resolved successfully!");
})