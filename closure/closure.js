function outer(){
    const a = "abc"
    function inner(){
        console.log("Hello",a)
        
    }
    inner()
}
outer()