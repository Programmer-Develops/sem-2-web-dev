// 7. Closures: 
//  A closure is a function that has access to its own scope, the outer function's scope, and the global scope.4
//  we acheive encapsulation using closures, as the inner function can access and manipulate the variables of the outer function,
//  but those variables are not accessible from outside the outer function.
// ------------------------------------------------------------------------------------|
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count);
//     }
// }

// ans = outer();
// ans();    // 1
// ans();   // 2
// ans();  // 3


// ------------------------------------------------------------------------------------|
// 8. Curring:
//  Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument. 
//  It allows you to create new functions by partially applying arguments to an existing function, which can be useful for creating more specific functions from general ones.
// ------------------------------------------------------------------------------------|
// function add(a) {
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 return a + b + c + d;
//             }
//         }
//     }
// }

// ans = add(1)(2)(3)(4);
// console.log(ans); // 10

// now through arrow function
// const add = a => b => c => d => a + b + c + d;

// ans = add(1)(2)(3)(4);
// console.log(ans); // 10