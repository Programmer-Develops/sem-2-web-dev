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
// let a = [1,2,3,4,0,9]
// b = 'hello'

// a2 = a.reverse();
// console.log(a2, a)

// b2 = a.join('')
// console.log(b2, a)

// c = b.split('')
// console.log(c, b);
let str = 'hello world'
// let ans = str.split(' ').reverse().join(' ')
// console.log(ans) // 'world hello'

let ans = str.split(' ').reverse().map((e)=>{
    return e.split('').reverse().join('')
}).join(' ')
console.log(ans)









// 12. Array slice() and splice()











// 13. callback function and Array Higher Order Function Methods : higher order are those function which takes another function as a argument
// function hof(callback) { // higher order function
//     console.log(1);
//     callback()
//     console.log(2)
// }

// function greet(){ // callback function
//     console.log(3);
// }
// hdf(greet)

// * map()
// let arr = [1,2,9,4,5,6,8]
// arr.map((e, i, a)=> console.log(e, i, a) ) // map takes only 3 parameters
// let ans = arr.map((e)=> {return e+5})


// * filter()
// let arr = [1,2,9,4,5,6,8]
// let ans = arr.filter((e) => {return e%2 == 1});
// console.log(ans)

// * sort()
// let arr = [1,2,9,4,5,6,8]

// let ans = arr.sort();
// console.log(ans)

// let ansd = arr.sort((a,b)=>b-a)
// console.log(ansd)

// * reduce()
// let arr = [1,2,9,4,5,6,8]
// let ans  = arr.reduce((acc, e)=>{
//     return acc+e
// },0)

// console.log(ans)

// * forEach()
// let arr = [1,2,9,4,5,6,8]
// let ans = arr.forEach(e => {
//     console.log(e+2)
// });

// * includes()











// 14. Problems on String Pattern









// 15. Function with Default Parameter

// function add(x = 0, y = 0) {
//     console.log(x,y);
// }

// add()












