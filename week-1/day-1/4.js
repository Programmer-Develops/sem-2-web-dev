let obj = {
    a:1,
    b:2
}

console.log(obj.b)

for (let key in obj) {
    console.log('obj[key] have output',obj[key])
    console.log(obj.key)//wont work
    console.log(obj['key'])//wont work
}