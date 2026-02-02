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