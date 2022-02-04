const express = require('express');
const app = express();

const productRouter = require('./router/product')


//Router middleware
app.use('/products',productRouter)


app.get('/',(req,res)=>{ 
    res.send("Home page");
});


app.listen(2000, ()=>{
    console.log('server started successfully');
})