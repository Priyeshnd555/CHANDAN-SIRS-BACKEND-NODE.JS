const express = require("express");

const cookieParser = require("cookie-parser");


const app = express()
const port = 2000;


//cookie parser middleware
app.use(cookieParser())


app.get("/read-cookie",(req,res)=>{
    //req.cookies
    // cookie can be present in res and req object also
    console.log(req.cookies);




    if(req.cookies.myName){
        res.send("all cookies"+JSON.stringify(req.cookies)+"Read Cookies route  : "+req.cookies.myName)

    }
    else if(req.cookies.email){
        res.send("all cookies"+JSON.stringify(req.cookies)+"\nRead Cookies route  : "+req.cookies.email)
        
    }
    else if(req.cookies.data){
        res.send("all cookies"+JSON.stringify(req.cookies)+"\nRead Cookies route  : "+req.cookies.data)
        
    }
    else{
        res.send("cookie does not exit")
    }
})

app.get('/create-cookie',(req,res)=>{
    


    res.cookie("myName","priyesh")

    res.send("cookie is created")
})

//CREATING PERSISTENT COOKIES 
app.get("/persist-create-cookie",(req,res)=>{
    
    res.cookie("email","priyeshnd555@gmail.com", {maxAge:86400000});
    res.send(" persistent cookie is created")
    
});

//TO CLEAR COOKIES 
app.get('/clear-cookie',(req,res)=>{

    res.clearCookie("email"); // this is to clear one cookie 
    res.send("my name Cookie cleared")
})

//persist cookies
app.get('/create-objcookie',(req,res)=>{
    res.cookie('data',{
        userName:"priyesh",
        age:"35"
    },{
        maxAge:86400000
    })

    res.send("Persistent cookie is created")
})
// Clear or delete all the cookie which is created above data cookie /create-objcookie
app.get('/clear-all-cookie',(req,res)=>{
    for (const cookie in req.cookies) {
        res.clearCookie(cookie)
    }
    res.send("Cookies are cleared")
})





app.listen(port,()=>{
    console.log("server started");
})