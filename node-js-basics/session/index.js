
const express = require('express')
const exphbs = require("express-handlebars")

const sessions = require("express-session")
const cookieParser= require("cookie-parser")



const app = express()
const port= 3200

const oneDay = 24*60*60*1000


const uname = "chandhan"
const pwd = "chandhan"

//session Middleware
app.use(sessions({
    secret:"thisisasecretkey",
    saveUninitialized:true,
    resave:false,
    cookie:{
        maxAge:oneDay
    }

}))

// cookie pareser middleware
app.use(cookieParser())




//handlebars set up 
app.engine("handlebars",exphbs())
app.set("view engine","handlebars")

//body parser miiddleware
app.use(express.urlencoded({extended:true}))

app.get('/user',(req,res)=>{
    console.log(req.session)
    if(req.session.userId){
        res.send('session Validated <a href="/logout">login </a>')
    }
    else{
        res.redirect('/')
    }
})

app.post("/login",(req,res)=>{
    const {username,password } = req.body;
    if(uname === username && pwd === password)
    {
        console.log(req.session);
        req.session.userId = username
        res.send('welcome user <a href="/logout">Logout</a>')
    }
    else{
        res.redirect("/")
    }
})

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})

app.get("/",(req,res)=>{
    console.log('requested');
    if(req.session.userId)
    {
        res.redirect("/user")
    }
    else{
        res.render('./login.handlebars');
    }
})

app.listen(port, ()=>{
    console.log("listening on port "+port)
})