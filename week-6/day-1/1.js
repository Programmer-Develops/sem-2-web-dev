// 1. Interpreted Programming Language: interpreted programming language is a type of programming language that is executed line by line by an interpreter.
//  The interpreter reads the source code, translates it into machine code, and executes it immediately.
//  This allows for faster development and debugging, as changes can be made and tested without the need for a separate compilation step.
//  Examples of interpreted programming languages include Python, JavaScript, and Ruby.
// ------------------------------------------------------------------------------------|

// var name = 'ram';
// console.log(name, typeof name);

// var age = 25;
// console.log(age, typeof age);

// var isStudent = true;
// console.log(isStudent, typeof isStudent);

// ------------------------------------------------------------------------------------|
// 2. Dynamically Typed Language: It is a type of programming language that does not require the programmer to specify the data type of a variable when it is declared.
//  The data type of a variable is determined at runtime based on the value assigned to it.
//  This allows for greater flexibility in programming, as variables can hold different types of data at different times during the execution of a program.
//  However, it can also lead to potential errors if a variable is assigned a value of an unexpected type.
//  Examples of dynamically typed languages include Python, JavaScript, and Ruby.
// ------------------------------------------------------------------------------------|

// var myVariable = "Hello, World!";
// console.log(myVariable, typeof myVariable);

// myVariable = 42;
// console.log(myVariable, typeof myVariable);

// ------------------------------------------------------------------------------------|
// 3. Hoisting: It is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
//  This means that you can use variables and functions before they are declared in the code.
//  However, only the declarations are hoisted, not the initializations. 
//  This can lead to unexpected behavior if you try to access a variable before it has been assigned a value.
// ------------------------------------------------------------------------------------|

// ------------------------------------------------------------------------------------|
// 4. Lexical Scope in JS: It refers to the visibility of variables and functions based on their location in the source code.
//  In JavaScript, variables and functions are accessible within the block of code where they are defined, as well as in any nested blocks.
//  This means that a variable declared inside a function is not accessible outside of that function, but it can be accessed by any inner functions defined within it.
//  Lexical scope is determined at the time of writing the code, and it does not change during runtime.
// ------------------------------------------------------------------------------------|

// hello()
// function hello() {
//     console.log(name); // undefined
//     console.log(age); // err

//     var name = 'ram';
//     let age = 25;

//     console.log(name); // ram
//     console.log(age); // 25

//     if (true) {
//         name = 'shyam';
//         age = 21

//         console.log(name) // shyam
//         console.log(age); // 21
//     }

//     console.log(name); // shyam
//     console.log(age); // 21
// }
// hello();

// hello()
function hello() {
    console.log(name); // undefined
    console.log(age); // err

    if (true) {
    var  name = 'shyam'; 
    let age = 21

    console.log(name) // shyam
    console.log(age); // 21
    }

    console.log(name); // shyam
    console.log(age); // err
}
hello();