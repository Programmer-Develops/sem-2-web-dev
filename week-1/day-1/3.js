// Object Data Type
// - ombination of key-value pair.
// - key is always string.
// - key is always unique and value may be duplicated.
// - Object is an mutable data type and is dynamic.
// - it is under non primitive data type

// 1. create
obj = {
    name:'Akshay',
    id: 123,
    active: true
}

// 2. read
console.log(obj)

// 3. update
// bracket notation,
obj['status'] = false
console.log(obj)

// dot notation
obj.age = 10
console.log(obj)

// 4. delete

delete obj['name'];
console.log(obj)

