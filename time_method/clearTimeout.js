//console.log("first");

let abc=setTimeout(()=>{
    console.log("second")
},3000)

clearTimeout(abc)
//console.log("third")