// ======= [ ES6 Concepts ]=======



// 1. Destructing in js


// let arr = [1,2,3];

// let [a,b,c] = arr
// console.log(a,b,c);


// let obj = {a:1,b:2}

// let {a,b} = obj;

// console.log(a,b);












// 2. Type conversion

// convert str data type value ---> num data type

// let str =  "123";

// let ans1 = Number(str);
// console.log(ans1, typeof ans1);


// let ans2 = +str;
// console.log(ans2, typeof ans2);

// let ans3 = parseInt(str);

// console.log(ans3, typeof ans3);






// convert num data ---> str data

// let num = 123;

// let ans1 = String(num);
// console.log(ans1, typeof ans1);

// let ans2 = "";
// ans2+=num;

// console.log(ans2, typeof ans2);

// let ans3 = num.toFixed();
// console.log(ans3, typeof ans3);







// 3. Falsy Values in JavaScript


// 0 
// false 
// "" 
// undefined 
// null 
// NaN


// if([]){
//     console.log(1);
    
// } else{
//     console.log(2);
    
// }


// console.log("ram" && "shyam");

// console.log("ram" || "shyam");


// console.log("hii" && !"byy" || "shy" && null || !undefined);

// 4. Ternary Operator : if 1st value is undefined then 2nd value is our answer

// synx: condition?"1st Operation":"2nd Operation"

// const ans = !!undefined?"Truthy Value":"Falsy Value"
// console.log(ans);

// 5. Nullish Coalescing Operator(??) : if 1st value is eigther null/undefined then 2nd value is our answer

// a??b

// let ans = null ?? "user";
// let ans1 = false ?? "love";
// let ans2 = undefined ?? null
// console.log(ans, ans1, ans2);

// 6. Array indexOf()

// let arr = [1,2,3];
// console.log(arr.indexOf(1)); // 0
// console.log(arr.indexOf(4)); // -1

// 7. Spread Operator : used to spread the elements of array/ object

// let arr1 = [1,2,3]
// let arr2 = [3,4,5]

// let arr = [...arr1, ...arr2]
// console.log(arr)

// let o1 = {a:1};
// let o2 = {b:2};

// let o3 = {...o1, ...o2, b:3, c:4}
// console.log(o3);

// 8. Rest operator : always return an array

// function add(a,...b) {
//     console.log(a)
//     console.log(b)
// }

// add(1,2,3,4,5,6,7,7)

// 9. Template Literals

// let name = "Shantanu Pandya"
// console.log(`my name is ${name}`)

// 10. String toLowerCase() and toUpperCase()

// 11. reverse(), join() and split() Method
let a = [1,2,3,4,0,9]
b = 'hello'

a2 = a.reverse();
console.log(a2, a)

b2 = b.join('')
console.log(b2, b)




// 12. Array slice() and splice()
// 13. Array Higher Order Function Methods
// * map()
// * filter()
// * sort()
// * reduce()
// * forEach()
// * includes()
// 14. Problems on String Pattern