console.log("first")

setImmediate(()=>{
console.log("second")
},5000)

console.log("third")